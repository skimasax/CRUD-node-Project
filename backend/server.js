const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("../backend/Config/Database");
const cryptoToken = require("../backend/Config/token");

const token = cryptoToken.generateRandomToken(32);


const PORT = process.env.PORT
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const authRoute = require('./routes/authRoute');
const profileRoute = require('./routes/profileRoute');
const paymentRoute = require('./routes/paymentRoute');

//create your routes
app.use('/api/v1/auth', authRoute); 
app.use('/api/v1/user', profileRoute); 
app.use('/api/v1/payment', paymentRoute); 




app.listen(PORT, () => {
		console.log(`started on port ${PORT}`);
})