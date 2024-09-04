const express = require('express');
const router = express.Router();

// Import controller functions
const { getUsers, createUser } = require('../controllers/userController');

// Define routes
router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router;
