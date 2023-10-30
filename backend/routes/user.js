const express = require("express");
const {signup,login} = require("../Controller/user");

const router = express.Router();


router.get('/', signup);
router.post('/login', login);

module.exports = router;