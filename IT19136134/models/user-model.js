const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  userName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  contactNo: { type: String, required: true },
  password: { type: String, required: true, trim: true },
  type: { type: String, trim: true },
});

module.exports = mongoose.model("users", UserModel);
