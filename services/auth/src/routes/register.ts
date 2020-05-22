import express, { Request, Response } from "express";
import { body } from "express-validator";

import { validate } from "../controllers/account";

const router = express.Router();

router.route("/register").post(validate, (req: Request, res: Response) => {
  return res.status(200).json({ res: "register" }).end();
});

export default router;
