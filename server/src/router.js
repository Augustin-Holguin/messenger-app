const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { postRegister, postLogin } = require('./controllers/authController');

router
.post('/register', postRegister)
.post('/login', postLogin);

module.exports = router;