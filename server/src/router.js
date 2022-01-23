const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { postRegister, postLogin } = require('./controllers/authController');
const { getRooms } = require('./controllers/roomController');

const { validateToken } = require('./utils/jwt');

router
.post('/register', postRegister)
.post('/login', postLogin)
.get('/rooms', validateToken, getRooms);

module.exports = router;