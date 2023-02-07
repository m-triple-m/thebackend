const { Schema, model, Types } = require("../../connection");

module.exports = model(
  "users",
  new Schema({
    email: String,
    username: String,
    password: String,
    createdAt: Date,
  })
);
