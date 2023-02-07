const router = require("express").Router();
const Model = require("../models/userModel");

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
      res.status(500).json(err);
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

router.get("/checkemail/:email", (req, res) => {
  Model.findOne({email : req.params.email})
    .then((result) => {
      // console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.post("/authenticate", (req, res) => {
  console.log(req.body);
  Model.findOne(req.body)
    .then((result) => {
      // console.log(result);
      if(result){
        res.status(201).json(result);
      }else{
        res.status(401).json({status : 'error'});
      }
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

module.exports = router;
