// load env variables to the process
require("dotenv").config();
// set undefined env variables
if (!process.env.NODE_ENV) {
  console.log(`NODE_ENV is undefined, process will exit`);
  process.exit(1);
}

// initialize server
import express from "express";
const server = express();

/**
 *
 * Set Global middleware
 *
 */

// for cross env
server.use(express.json(), express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  // for dev env
  const logger = require("morgan");
  server.use(logger("dev"));
} else if (process.env.NODE_ENV === "staging") {
  // for staging env
} else {
  // for prod env
}

/**
 *
 * Routes
 *
 */
import { account, register, login, logout } from "./routes";
server.use("/api/auth/", account);
server.use("/api/auth/", register);
server.use("/api/auth/", login);
server.use("/api/auth/", logout);

server.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

server.listen(3000, () => {
  console.log(`Server running on Port: 3000`);
});
