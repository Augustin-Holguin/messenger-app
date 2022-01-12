const bcrypt = require('bcrypt');
const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const authController = {
    postRegister: async function(req, res) {
        const { username, email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            bcrypt.hash(password, 10).then((hash) => {
                User.create({
                    username,
                    email,
                    password: hash
                })
                .then((result) => {
                    res.json({
                        logged: true,
                        username,
                        password: '',
                        token: createToken(result.dataValues)
                    });
                }).catch((err) => {
                    console.log(err)
                    res.status(401).json({ error: err })
                });
            });
        } else {
            res.status(401).json({ error: `${email} is already in use. Please log in or create an account with an other email.`});
        }
    },
    postLogin: async function(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (user) {
            const dbPassword = user.password;
            
            bcrypt.compare(password, dbPassword).then((match) => {
                if (!match) {
                    res.status(401).json({ error: 'Wrong email/password combination.'});
                } else {
                    res.json({
                        logged: true,
                        username: user.username,
                        password: '',
                        token: createToken(user)
                    });
                }
            });
        } else {
            res.status(401).json({ error: `We could not find an account linked to the email ${email}` });
        }
    },
    jwtGenerator: function() {

    }
}

module.exports = authController;
