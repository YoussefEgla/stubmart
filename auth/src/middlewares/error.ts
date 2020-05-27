import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    return res
      .status(err.statusCode)
      .json({ errors: err.serializeErrors() })
      .end();
  } else {
    return res
      .status(400)
      .json({ errors: [{ message: "Something went wrong" }] })
      .end();
  }
};
