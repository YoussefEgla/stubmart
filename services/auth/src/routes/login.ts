import express from "express";

const router = express.Router();

router.route("/login").post((req, res) => {
  return res.status(200).json({ res: "login" }).end();
});

export default router;
