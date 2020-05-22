import { Request, Response, NextFunction } from "express";
import { RequestValidationError, DatabaseConnectionError } from "../errors";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof RequestValidationError) {
    return res
      .status(400)
      .json({
        errors: err.errors.map((error) => {
          return { message: error.msg, field: error.param };
        }),
      })
      .end();
    //
  } else if (err instanceof DatabaseConnectionError) {
    return res
      .status(500)
      .json({ errors: [{ message: err.reason }] })
      .end();
    //
  }

  res
    .status(400)
    .json({ errors: [{ message: err.message }] })
    .end();
}
