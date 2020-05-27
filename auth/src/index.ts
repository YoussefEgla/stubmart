require("dotenv").config();
import logger from "morgan";
import mongoose from "mongoose";
import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares";

const start = async () => {
  mongoose.Promise = Promise;
  process.env.NODE_ENV === "development" ? mongoose.set("debug", true) : null;

  const URI = process.env.MONGO_DB_URI
    ? process.env.MONGO_DB_URI
    : "auth-mongo-service";

  await mongoose
    .connect(`mongodb://${URI}:27017/auth`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log(`Connected to ${URI} Database Successfully`);
    })
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      const PORT =
        process.env.PORT && parseInt(process.env.PORT)
          ? parseInt(process.env.PORT)
          : 3000;
      server.listen(PORT, () => {
        console.log(`Auth Service is running on port: ${PORT}`);
      });
    });
};

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
start();
