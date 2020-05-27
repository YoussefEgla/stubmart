import { ValidationError } from "express-validator";
import { BaseError } from "./base-error";

export class RequestValidationError extends BaseError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg as string, field: err.param };
    });
  }
}
