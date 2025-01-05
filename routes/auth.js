const express = require('express');
const { register, login, validateToken, profile } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/profile', profile);
router.post('/validate-token', validateToken); // Optional for token validation

module.exports = router;