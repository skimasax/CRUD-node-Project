const express = require("express");

const router = express.Router();

const {profile} = require('../Controller/profileController');


router.get('/profile', profile);

module.exports = router;