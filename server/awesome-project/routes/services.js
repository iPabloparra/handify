const express = require("express");
const serviceRoute = express.Router();
const passport = require("passport");

const Service = require("../models/Service");
const upload = require('../config/multer');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

serviceRoute.post("/create-service", (req, res, next) => {
    console.log(req.body)
    var userId = req.body.userId;
    var price = req.body.price;
    var category = req.body.category;
    var available = req.body.available
    var newService = Service({
        userId,
        price,
        category,
        available,
    });

    newService.save((err) => {
        if (err) {

            res.status(400).json({
                message: "Something went wrong"
            });
        } else {
            res.status(200).json(req.body);
        };
    });
});



module.exports = serviceRoute;
