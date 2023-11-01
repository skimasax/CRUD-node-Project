const express = require("express");
const User = require('../Model/UserModel');
const userService = require('../Service/UserService');

const showProfile = async (req, res) => {
    try {

        const user = req.user;
        
        return res.status(200).json({
            status: true,
            data: user,
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'An error occurred while fetching the user profile',
            error: err.message,
        });
    }
}

const listProfiles = async (req, res) => {
    try {
        const users = await userService.getAllUser();

        if (!users.length) {
            return res.status(404).json({
                status: false,
                message: 'No users found',
            });
        }

        return res.status(200).json({
            status: true,
            data: users,
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'An error occurred while fetching user profiles',
            error: err.message,
        });
    }
}

const updateProfile = async (req, res) => {
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

const deleteProfile = async (req, res) => {
    const id = req.params.id;

    try {
        await userService.deleteUserById(id);

        return res.status(200).json({
            status: true,
            message: 'Profile Deleted Successfully',
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'An error occurred while deleting the profile',
            error: err.message,
        });
    }
}

const updateProfilePicture = async(req, res) => {
        try {
            const user = req.user;
        } catch (error) {
            
        }
}

module.exports = { showProfile, listProfiles, updateProfile, deleteProfile, updateProfilePicture };
