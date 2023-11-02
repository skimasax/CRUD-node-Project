const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("../backend/Config/Database");
const cryptoToken = require("../backend/Config/token");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const token = cryptoToken.generateRandomToken(32);

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp" }));
app.use(express.urlencoded({ extended: false }));

const authRoute = require("./routes/authRoute");
const profileRoute = require("./routes/profileRoute");
const paymentRoute = require("./routes/paymentRoute");

//create your routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", profileRoute);
app.use("/api/v1/payment", paymentRoute);

app.listen(PORT, () => {
  console.log(`started on port ${PORT}`);
});
