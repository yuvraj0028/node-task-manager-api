const mongoose = require("mongoose");

// initializing mongodb connection
mongoose.connect(process.env.MONGODB_URL);
