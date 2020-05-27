require("dotenv").config();
import logger from "morgan";
import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares";

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
 * Apply Routes
 *
 */
server.use(routes);

/**
 *
 * Error Handler Middleware
 *
 */
server.use(errorHandler);

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
