import { BaseError } from "./base-error";

export class Error404 extends BaseError {
  statusCode = 404;

  constructor() {
    super();
    Object.setPrototypeOf(this, Error404.prototype);
  }

  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
