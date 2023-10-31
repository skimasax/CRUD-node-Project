const express = require("express");
const User = require('../Model/UserModel');
const userService = require('../Service/UserService');

const show = async(req, res) => {
    const id = req.params.id;
    const user = await  User.findOne({_id: id});

    if(!user){
        throw error();
    }

    return res.status(200).json({
        'status':true,
        'data':user,
    });
}

const index = async(req, res) => {
    const users = await userService.getAllUser();

    if(!users){
        return res.status(404).json({
            status: false,
            message: 'User not found',
        });
    }

    return res.status(200).json({
        'status':true,
        'data':users,
    });
    
}

const update = async (req, res) => {
    const id = req.params.id;
    
    try {
        const user = await userService.findUserById(id);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found',
            });
        }

        user.firstname = req.body.firstname;

        await user.save();

        return res.status(200).json({
            status: true,
            data: user,
            message: 'Profile Updated Successfully',
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'An error occurred while updating the profile',
            error: err.message,
        });
    }
};


const destroy = async(req, res) => {
    const id = req.params.id;
     await userService.deleteUserById(id);

    return res.status(200).json({
        'status':true,
        'message': 'Profile Deleted Successfully',
    });
    
}


module.exports = {show, index, update, destroy}