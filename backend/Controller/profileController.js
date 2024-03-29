const express = require("express");
const User = require("../Model/UserModel");
const userService = require("../Service/UserService");
const uploadImage = require("../Service/imageUploaader");

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
      message: "An error occurred while fetching the user profile",
      error: err.message,
    });
  }
};

const listProfiles = async (req, res) => {
  try {
    const users = await userService.getAllUser();

    if (!users.length) {
      return res.status(404).json({
        status: false,
        message: "No users found",
      });
    }

    return res.status(200).json({
      status: true,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "An error occurred while fetching user profiles",
      error: err.message,
    });
  }
};

const updateProfile = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userService.findUserById(id);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    user.firstname = req.body.firstname;

    await user.save();

    return res.status(200).json({
      status: true,
      data: user,
      message: "Profile Updated Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "An error occurred while updating the profile",
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
      message: "Profile Deleted Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "An error occurred while deleting the profile",
      error: err.message,
    });
  }
};

const updateProfilePicture = async (req, res) => {
  try {
    const file = { file }.req.body;
    const user = req.user;
    const data = await User.findUserById(user._id);
    if (!data) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    data.image = file;
    await data.save();
    return res.status(200).json({
      status: true,
      data: data,
      message: "Profile Picture Uploaded Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "An error occurred while uploading the profile picture",
      error: err.message,
    });
  }
};

const upload = async (req, res) => {
  const image = await uploadImage(req, res, "testing");
  console.log(image);
  res.status(201).json(image);
};

module.exports = {
  showProfile,
  listProfiles,
  updateProfile,
  deleteProfile,
  updateProfilePicture,
  upload,
};
