type TrimInput = string;
type TrimOutput = string;

type UppercaseInput = string;
type UppercaseOutput = string;

type LowercaseInput = string;
type LowercaseOutput = string;

type CharCountInput = string;
type CharCountOutput = number;

type ReplaceInput = [string, string];
type ReplaceOutput = string;

type SubstringInput = [number, number?];
type SubstringOutput = string;

type PadInput = [number, string?];
type PadOutput = string;

class StringUtilsTypeError extends TypeError {
  constructor(...message: any[]) {
    super(message.join(" "));
    this.name = "StringUtilsTypeError";
  }
}

export module StringUtils {
  /**
   * Trims whitespace from both ends of a string.
   * @param str The string to trim.
   * @returns The trimmed string.
   */
  export function trim(str: TrimInput): TrimOutput {
    if (typeof str !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "str" + '"',
        "to be",
        "`string`",
        "but got",
        typeof str,
        "instead"
      );
    }
    return str.trim();
  }

  /**
   * Converts a string to uppercase.
   * @param str The string to convert.
   * @returns The uppercase string.
   */
  export function toUpperCase(str: UppercaseInput): UppercaseOutput {
    if (typeof str !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "str" + '"',
        "to be",
        "`string`",
        "but got",
        typeof str,
        "instead"
      );
    }
    return str.toUpperCase();
  }

  /**
   * Converts a string to lowercase.
   * @param str The string to convert.
   * @returns The lowercase string.
   */
  export function toLowerCase(str: LowercaseInput): LowercaseOutput {
    if (typeof str !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "str" + '"',
        "to be",
        "`string`",
        "but got",
        typeof str,
        "instead"
      );
    }
    return str.toLowerCase();
  }

  /**
   * Counts the number of characters in a string.
   * @param str The string to count characters in.
   * @returns The number of characters in the string.
   */
  export function countCharacters(str: CharCountInput): CharCountOutput {
    if (typeof str !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "str" + '"',
        "to be",
        "`string`",
        "but got",
        typeof str,
        "instead"
      );
    }
    return str.length;
  }
  /**
   * Replaces all occurrences of a substring in a string with another substring.
   * @param str The string to search and replace in.
   * @param replace The substring to search for and replace.
   * @param withStr The substring to replace the found substrings with.
   * @returns The modified string.
   */
  export function replace(
    str: string,
    replace: ReplaceInput,
    withStr: string
  ): ReplaceOutput {
    if (typeof str !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "str" + '"',
        "to be",
        "`string`",
        "but got",
        typeof str,
        "instead"
      );
    }
    if (typeof withStr !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "withStr" + '"',
        "to be",
        "`string`",
        "but got",
        typeof withStr,
        "instead"
      );
    }
    return str.split(replace[0]).join(withStr);
  }

  /**
   * Extracts a substring from a string.
   * @param str The string to extract the substring from.
   * @param start The starting index of the substring.
   * @param end The ending index of the substring (optional).
   * @returns The extracted substring.
   */
  export function substring(
    str: string,
    [start, end]: SubstringInput
  ): SubstringOutput {
    if (typeof str !== "string") {
      throw new StringUtilsTypeError(
        "Expected",
        '"' + "str" + '"',
        "to be",
        "`string`",
        "but got",
        typeof str,
        "instead"
      );
    }
    return str.substring(start, end);
  }

  /**
   * Pads a string with a specified character to a specified length.
   * @param str The string to pad.
   * @param length The total length of the padded string.
   * @param padChar The character to use for padding (optional, defaults to a space).
   * @returns The padded string.
   */
  export function pad(str: string, [length, padChar]: PadInput): PadOutput {
    return str.padEnd(length, padChar ?? " ");
  }
}
