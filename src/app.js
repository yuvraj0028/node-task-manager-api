require("./db/mongoose");
const express = require("express");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

// initializing express app
const app = express();

// This middleware function parses incoming requests with JSON payloads, making it easier to handle POST requests in the server.
app.use(express.json());

// route for user in db
app.use(userRouter);

// route for task in db
app.use(taskRouter);

module.exports = app;
