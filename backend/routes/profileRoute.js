const express = require("express");

const router = express.Router();

const {show,index,update,destroy} = require('../Controller/profileController');


router.get('/profile/:id', show);
router.get('/profile/', index);
router.put('/profile/:id', update);
router.delete('/profile/:id', destroy);

module.exports = router;