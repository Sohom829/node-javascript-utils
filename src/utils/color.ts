enum ColorFormat {
  HEX = "hex",
  RGB = "rgb",
  RGBA = "rgba",
}

interface RGBColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface RGBAColor extends RGBColor {
  a: number;
}

type Color = string | RGBColor | RGBAColor;

class ColorUtilsError extends Error {}

class ColorUtilsTypeError extends TypeError {}

function parseHexColor(hex: string): RGBColor {
  const hexWithoutHash = hex.replace("#", "");
  if (!/^[0-9A-Fa-f]{6}$/.test(hexWithoutHash)) {
    throw new ColorUtilsError("Invalid hex color format.");
  }

  const r = parseInt(hexWithoutHash.substr(0, 2), 16);
  const g = parseInt(hexWithoutHash.substr(2, 2), 16);
  const b = parseInt(hexWithoutHash.substr(4, 2), 16);

  return { r, g, b };
}

function parseColor(color: Color): RGBAColor {
  if (typeof color === "string") {
    if (color.startsWith("#")) {
      return { ...parseHexColor(color), a: 1 };
    }

    const match = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/
    );
    if (!match) {
      throw new ColorUtilsError("Invalid color format.");
    }

    const [_, r, g, b, a] = match.map(Number);

    if (a !== undefined && (a < 0 || a > 1)) {
      throw new ColorUtilsError("Invalid color alpha value.");
    }

    return { r, g, b, a: a ?? 1 };
  } else if (typeof color === "object") {
    const { r, g, b } = color;
    if ("a" in color) {
      const { a } = color;

      if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number" ||
        typeof a !== "number"
      ) {
        throw new ColorUtilsTypeError("Invalid color property type.");
      }

      return { r, g, b, a };
    } else {
      if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number"
      ) {
        throw new ColorUtilsTypeError("Invalid color property type.");
      }

      return { r, g, b, a: 1 };
    }
  } else {
    throw new ColorUtilsTypeError("Invalid color type.");
  }
}

function formatColor(
  color: RGBColor | RGBAColor,
  format: ColorFormat = ColorFormat.HEX
): string {
  const { r, g, b, a } = parseColor(color);

  switch (format) {
    case ColorFormat.HEX:
      return `#${[r, g, b]
        .map((c) => c.toString(16).padStart(2, "0"))
        .join("")}`;
    case ColorFormat.RGB:
      return `rgb(${r}, ${g}, ${b})`;
    case ColorFormat.RGBA:
      if ("a" in color) {
        return `rgba(${r}, ${g}, ${b}, ${color.a})`;
      } else {
        throw new ColorUtilsError("Invalid color format.");
      }
    default:
      throw new ColorUtilsError("Invalid color format.");
  }
}

export {
  ColorFormat,
  ColorUtilsError,
  ColorUtilsTypeError,
  parseColor,
  formatColor,
};
