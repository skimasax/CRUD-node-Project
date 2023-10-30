const express = require("express");

const dotenv = require("dotenv").config();
const PORT = process.env.PORT
const app = express();

const userRoute = require('./routes/user');

//create your routes
app.use('/api/v1/user', userRoute); 




app.listen(PORT, () => {
		console.log(`started on port ${PORT}`);
})