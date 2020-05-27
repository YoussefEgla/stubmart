import express, { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors";

const router = express.Router();

router
  .route("/signup")
  .post(
    [
      body("email").isEmail().withMessage("Email is invalid"),
      body("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password is too short")
        .isLength({ max: 50 })
        .withMessage("Password is too long"),
    ],
    (req: Request, res: Response, next: NextFunction) => {
      // handle validation
      if (!validationResult(req).isEmpty()) {
        return next(new RequestValidationError(validationResult(req).array()));
      }

      const { email, password } = req.body;

      res.send("Created");
    }
  );

export default router;
