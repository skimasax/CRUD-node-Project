const express = require("express");

const dotenv = require("dotenv").config();
const PORT = process.env.PORT
const app = express();

//create your routes
app.use('/api/v1/user', require('./routes/user')) 



app.listen(5000, () => {
		console.log(`started on port ${PORT}`);
})