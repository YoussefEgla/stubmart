import express from "express";

// Routes endpoints
import currentUser from "./current-user";
import login from "./login";
import logout from "./logout";
import signup from "./signup";
import { Error404 } from "../errors";

const server = express();

server.use("/api/auth/", signup);
server.use("/api/auth/", login);
server.use("/api/auth/", logout);
server.use("/api/auth/", currentUser);

/**
 *
 * Handle 404
 *
 */
server.all("*", (req, res, next) => {
  next(new Error404());
});

export default server;
