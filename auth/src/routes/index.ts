import express from "express";

// Routes endpoints
import currentUser from "./current-user";
import login from "./login";
import logout from "./logout";
import signup from "./signup";

const server = express();

server.use("/api/auth/", signup);
server.use("/api/auth/", login);
server.use("/api/auth/", logout);
server.use("/api/auth/", currentUser);

export default server;
