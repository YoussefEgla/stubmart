import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError, DatabaseConnectionError } from "../errors/";

const router = express.Router();

router.route("/register").post(
  // validation
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    // handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    console.log("Creating user");
    throw new DatabaseConnectionError();

    return res.status(200).json({ res: "registered" }).end();
  }
);

export default router;
