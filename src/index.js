require("./db/mongoose");
const express = require("express");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

// initializing express app
const app = express();
// giving port value
const port = process.env.port;

// This middleware function parses incoming requests with JSON payloads, making it easier to handle POST requests in the server.
app.use(express.json());

// route for user in db
app.use(userRouter);

// route for task in db
app.use(taskRouter);

// starting the server
app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});
