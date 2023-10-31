const express = require("express");
const User = require('../Model/UserModel');


const findUserById = async(id) => {
    const user = await User.findById(id)
    return user;
}


module.exports = {findUserById};