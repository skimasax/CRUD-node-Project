const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/auth");

const { makePayment} = require("../Controller/PaystackController");
// Apply the authenticateToken middleware to all routes in this router
// router.use(authenticateToken);


router.post('/make-payment', makePayment);

module.exports = router;
