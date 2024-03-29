// Import mongoose dependency
const mongoose = require("mongoose");

// Create new Mongoose Schema
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  hash: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    require: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export Mongoose user schema
module.exports = mongoose.model("User", userSchema);
