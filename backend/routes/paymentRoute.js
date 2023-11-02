const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/auth");

const { makePayment, verifyPayment} = require("../Controller/PaystackController");
// Apply the authenticateToken middleware to all routes in this router
// router.use(authenticateToken);


router.post('/make-payment', makePayment);
router.post('/verify-payment', verifyPayment);

module.exports = router;
