enum ErrorCode {
  BadInput = "bad_input",
  InvalidData = "invalid_data",
  ServerError = "server_error",
}

interface ErrorOptions {
  message: string;
  code: ErrorCode;
  status?: number;
  [key: string]: any;
}

class CustomError extends Error {
  code: ErrorCode;
  status: number;

  constructor({ message, code, status = 500 }: ErrorOptions) {
    super(message);
    this.name = "CustomError";
    this.code = code;
    this.status = status;
  }
}

class ECreatorError extends CustomError {
  constructor(message: string) {
    super({ message, code: ErrorCode.ServerError });
    this.name = "ECreatorError";
  }
}

class ECreatorTypeError extends CustomError {
  constructor(message: string) {
    super({ message, code: ErrorCode.BadInput });
    this.name = "ECreatorTypeError";
  }
}

class ECreatorSyntaxError extends CustomError {
  constructor(message: string) {
    super({ message, code: ErrorCode.InvalidData });
    this.name = "ECreatorSyntaxError";
  }
}

export { CustomError };
