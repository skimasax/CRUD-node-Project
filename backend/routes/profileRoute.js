const express = require("express");
const authenticateToken = require("../Middleware/auth");
const router = express.Router();

const {showProfile,
    updateProfile,
    deleteProfile} = require('../Controller/profileController');

router.use(authenticateToken)
// Use meaningful route names and HTTP methods
router.get('/profile', showProfile);
router.put('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);

module.exports = router;
 