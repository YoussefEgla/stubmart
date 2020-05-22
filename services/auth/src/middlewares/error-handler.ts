import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Something went wrong", err);

  res.status(400).json({ message: err.message }).end();
}
