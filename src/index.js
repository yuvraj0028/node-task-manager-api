require("./db/mongoose");
const app = require("./app");

// giving port value
const port = process.env.PORT;

// starting the server
app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});
