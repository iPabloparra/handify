const express = require("express");
const users = express.Router();
const passport = require("passport");

const User = require("../models/User");
const upload = require('../config/multer');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

module.exports = users;
