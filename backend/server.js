const express = require("express");

const dotenv = require("dotenv").config();
const PORT = process.env.PORT
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const authRoute = require('./routes/authRoute');
const profileRoute = require('./routes/profileRoute');

//create your routes
app.use('/api/v1/user', authRoute); 




app.listen(PORT, () => {
		console.log(`started on port ${PORT}`);
})