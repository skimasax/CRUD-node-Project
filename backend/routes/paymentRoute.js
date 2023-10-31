const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/auth");


const { makePayment } = require('../Controller/profileController');

// Apply the authenticateToken middleware to all routes in this router
// router.use(authenticateToken);

// Define a route for making a payment (POST request)
router.post('/make-payment', makePayment);

module.exports = router;
