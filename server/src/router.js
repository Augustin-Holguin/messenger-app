const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { postRegister } = require('./controllers/authController');

router.post('/register', postRegister);

module.exports = router;