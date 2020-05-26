require("dotenv").config();
import logger from "morgan";
import express from "express";

const server = express();

/**
 *
 * Apply Top Level Middleware
 *
 */
server.use(
  process.env.NODE_ENV === "development"
    ? logger("dev")
    : (req, res, next) => next(),
  express.urlencoded({ extended: true }),
  express.json()
);
/**
 *
 * Start Server
 *
 */
const PORT =
  process.env.PORT && parseInt(process.env.PORT)
    ? parseInt(process.env.PORT)
    : 3000;
server.listen(PORT, () => {
  console.log(`Auth Service is running on port: ${PORT}`);
});
