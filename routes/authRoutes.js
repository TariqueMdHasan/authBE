const express = require('express');
const router = express.Router();
const Login = require('../controllers/Login.js');
const Register = require('../controllers/Register.js');
const UserProfile = require('../controllers/UserProfile.js');
const authMiddleware = require('../middleware/authMiddleware.js');

router.post('/login', Login.login);

router.post('/register', Register.register);

router.get('/profile', authMiddleware, UserProfile.getUserProfile);


module.exports = router;