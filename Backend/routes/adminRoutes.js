const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route for creating a new admin user
router.post('/signup', adminController.createAdminUser);

// Route for signing in an admin user (GET request)
router.get('/signin', adminController.signInAdminUserGet);

module.exports = router;
