const mongoose = require("mongoose");
const api_config = require("./config");
mongoose
  .connect(api_config.dbUrl)
  .then((result) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
