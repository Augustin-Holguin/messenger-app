const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { postRegister, postLogin } = require('./controllers/authController');
const { getRooms, getRoomMessages } = require('./controllers/roomController');

const { validateToken } = require('./utils/jwt');

router
.post('/register', postRegister)
.post('/login', postLogin)
.get('/rooms', validateToken, getRooms)
.get('/room/:roomId/messages', validateToken, getRoomMessages);

module.exports = router;