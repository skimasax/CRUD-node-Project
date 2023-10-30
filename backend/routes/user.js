const express = require("express");
const {signup} = require("../Controller/user");

const router = express.Router();


router.post('/', signup);


module.exports = router;