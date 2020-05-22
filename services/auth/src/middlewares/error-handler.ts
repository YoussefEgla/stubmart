import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .json({ errors: err.serializeErrors() })
      .end();
  }

  res
    .status(400)
    .json({ errors: [{ message: err.message }] })
    .end();
}
