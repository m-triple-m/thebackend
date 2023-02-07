const { Schema, model, Types } = require("../../connection");

module.exports = model(
  "todos",
  new Schema({
    title: String,
    done: { type: Boolean, default: false },
    createdAt: Date,
  })
);
