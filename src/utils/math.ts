enum MathUtilsErrorCode {
  INVALID_ARGUMENTS = "Invalid Arguments",
  DIVIDE_BY_ZERO = "Divide by Zero",
}

interface MathUtilsErrorOptions {
  code: MathUtilsErrorCode;
  message: string;
}

class MathUtilsError extends Error {
  code: MathUtilsErrorCode;

  constructor({ code, message }: MathUtilsErrorOptions) {
    super(message);
    this.code = code;
  }
}

class MathUtilsTypeError extends TypeError {
  constructor(message: string) {
    super(message);
  }
}

interface MathUtilsInterface {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

class MathUtils implements MathUtilsInterface {
  add(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new MathUtilsTypeError("Arguments should be numbers");
    }
    return a + b;
  }

  subtract(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new MathUtilsTypeError("Arguments should be numbers");
    }
    return a - b;
  }

  multiply(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new MathUtilsTypeError("Arguments should be numbers");
    }
    return a * b;
  }

  divide(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new MathUtilsTypeError("Arguments should be numbers");
    }
    if (b === 0) {
      throw new MathUtilsError({
        code: MathUtilsErrorCode.DIVIDE_BY_ZERO,
        message: "Cannot divide by zero",
      });
    }
    return a / b;
  }
}

export { MathUtils };
