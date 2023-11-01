const express = require("express");
const authenticateToken = require("../Middleware/auth");
const router = express.Router();

const {showProfile,
    updateProfile,
    deleteProfile,
    updateProfilePicture} = require('../Controller/profileController');

router.use(authenticateToken)
// Use meaningful route names and HTTP methods
router.get('/profile', showProfile);
router.put('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);
router.post('/profile/upload-picture', updateProfilePicture);

module.exports = router;
 