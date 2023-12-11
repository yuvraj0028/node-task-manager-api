const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      default: false,
      type: Boolean,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// task model to save in db
const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
