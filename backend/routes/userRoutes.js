const express = require('express');
const router = express.Router();
const { signIn, signUp, getUserDetails } = require('../controllers/userController');

// Route for user registration
router.post('/signup', signUp);

// Route for user login
router.post('/signin', signIn);

// Route to get user details (authentication required)
router.get('/profile/:id', getUserDetails);

module.exports = router;
