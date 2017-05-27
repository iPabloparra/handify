const express        = require("express");
const users = express.Router();
const passport = require("passport");

// Our user model
const User           = require("../models/User");
const upload = require('../config/multer');

// Bcrypt let us encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;


module.exports = users;
