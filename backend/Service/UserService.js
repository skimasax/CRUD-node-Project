const express = require("express");
const User = require('../Model/UserModel');


const findUserById = async(id) => {
    const user = await User.findById(id)
    return user;
}

const findUserByEmail = async(email) => {
    const user = await User.findOne({email:email})
    return user;
}

const getAllUser = async() => {
    const users = await User.find({})
    return users;
}

const deleteUserById = async(id) => {
    const user = await User.findByIdAndDelete(id)
    if(!user){
        return ('User not found')
    }

    return 'Deleted Successfully';
}


module.exports = {findUserById, getAllUser, deleteUserById, findUserByEmail};