const express = require("express");
const fileUpload = require('express-fileupload');
const cloudinary = require("cloudinary");

const upload = async(file) => {
    cloudinary.uploader.upload(file.tempFilePath, (result) => {
        // `result` contains the uploaded file's details, including the public URL
        return result;
}
}

module.export = {upload};