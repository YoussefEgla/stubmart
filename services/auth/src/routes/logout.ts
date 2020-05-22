import express from "express";

const router = express.Router();

router.route("/logout").post((req, res) => {
  return res.status(200).json({ res: "logout" }).end();
});

export default router;
