const router = require("express").Router();
const Model = require("../models/todoModel");

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((result) => {
      // console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      // console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      // console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

module.exports = router;
