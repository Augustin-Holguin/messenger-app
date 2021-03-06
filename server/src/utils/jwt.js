const jwt = require('express-jwt');
const { sign, verify } = require('jsonwebtoken');

const createToken = (user) => {
    const jwtContent = { userId: user.id };
    const jwtSecret = process.env.JWT_SECRET;
    const jwtOptions = {
        algorithm: 'HS256',
        expiresIn: process.env.JWT_EXPIRY_DEV
    };

    const token = sign(jwtContent, jwtSecret, jwtOptions);

    return token;
}

const validateToken = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] });

module.exports = { createToken, validateToken };