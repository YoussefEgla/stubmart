export class DatabaseConnectionError extends Error {
  reason = "Error connecting to database";

  constructor() {
    super();
    // built-in
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
