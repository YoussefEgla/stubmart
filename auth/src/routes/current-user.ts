import express from "express";

const router = express.Router();
router.route("/currentuser").get();

export default router;
