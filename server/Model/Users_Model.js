const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  sr_no: Number,
  name: String,
  username: String,
  email: String,

  phone: String,
  website: String,
});
module.exports = mongoose.model("Users", UsersSchema);
