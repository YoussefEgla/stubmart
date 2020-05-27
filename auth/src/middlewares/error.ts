import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    res.status(err.statusCode).json({ errors: err.serializeErrors() }).end();
  } else {
    res.status(400).json({ errors: [{ message: "Something went wrong" }] });
  }
};
