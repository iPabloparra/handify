const express        = require("express");
const incidence = express.Router();
const passport = require("passport");

// Our user model
const Incidence           = require("../models/Incidence");
const upload = require('../config/multer');

// Bcrypt let us encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;


incidence.post("/create-incidence", (req, res, next) => {
  console.log(req.body)
  var title = req.body.title;
  var description = req.body.description;
  var category = req.body.category;
  var userId = req.body.userId
  var newIncidence = Incidence({
      title,
      category,
      description,
      userId
    });

    newIncidence.save((err) => {
      if (err) {
        console.log("este3")
        res.status(400).json({ message: "Something went wrong" });
      } else {
          res.status(200).json(req.body);
        };
      });
    });

    incidence.get("/list-incidences", (req, res, next) => {
      Incidence.find({},function (err, incidence) {
        if (err){
          return res.json(err)
        }
        return res.json(incidence)

      })

    });



/* CREATE a new incidence image */
incidence.post('/uploadfile', upload.single('file'), function(req, res) {
  return res.json({
    message: 'New Phone created!',
  });
});




module.exports = incidence;
