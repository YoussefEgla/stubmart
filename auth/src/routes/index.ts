import express from "express";

// Routes endpoints
import currentUser from "./current-user";
import login from "./login";
import logout from "./logout";
import signup from "./signup";

const server = express();

server.use("/api/users/", signup);
server.use("/api/users/", login);
server.use("/api/users/", logout);
server.use("/api/users/", currentUser);

export default server;
