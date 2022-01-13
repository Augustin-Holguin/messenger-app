const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { postRegister, postLogin } = require('./controllers/authController');
const { getFriends } = require('./controllers/userController');

const { validateToken } = require('./utils/jwt');

router
.post('/register', postRegister)
.post('/login', postLogin)
.get('/friends', validateToken, getFriends);

module.exports = router;