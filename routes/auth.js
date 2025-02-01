const express = require('express');
const { register, login, validateToken, profile, getUsers, getBuyers, getSellers } = require('../controllers/authController');
const { authenticateAdmin, authenticate } = require('../middleware/auth')

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', profile);
router.post('/validate-token', validateToken); // Optional for token validation
router.get('/sellers', authenticateAdmin, getSellers); // Optional for token validation
router.get('/buyers', authenticateAdmin, getBuyers); // Optional for token validation
router.get('/', authenticateAdmin, getUsers); // Optional for token validation

module.exports = router;