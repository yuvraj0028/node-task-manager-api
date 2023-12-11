const jwt = require("jsonwebtoken");
const User = require("../models/user");

// middleware function to check if user is authenticated
const auth = async (req, res, next) => {
  try {
    // extracting token from header
    const token = req.header("Authorization").replace("Bearer ", "");
    // checking if token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    // storing token in req.token
    req.token = token;
    // storing user in req.user
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
