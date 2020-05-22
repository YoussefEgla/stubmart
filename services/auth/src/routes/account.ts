import express from "express";

const router = express.Router();

router.route("/account").get((req, res) => {
  return res.status(200).json({ res: "Hello" }).end();
});

export default router;
