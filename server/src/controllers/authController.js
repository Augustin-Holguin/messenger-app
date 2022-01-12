const bcrypt = require('bcrypt');
const { User } = require('../models');

const authController = {
    postRegister: async function(req, res) {
        const { name, email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            bcrypt.hash(password, 10).then((hash) => {
                User.create({
                    name,
                    email,
                    password: '',
                    password: hash
                })
            }).then(() => {
                res.json({
                    logged: true,
                    name,
                    // token: jsonwebtoken
                })
            }).catch((err) => {
                res.status(401).json({ error: err })
            });
        } else {
            res.status(401).json({ error: `${email} is already in use. Please log in or create an account with an other email.`});
        }
    },
    postLogin: async function(req, res) {
        const { email, password } = req.body;

        // check if email exists with AWAIT const user = await User.findOne ...
        // if doesn't exist res.status(401).json({ error: 'User does not exist' })

        // const dbPassword = user.password;
        // compare passwords: bcrypt.compare(password, dbPassword)
        // .then((match) => {
            if (!match) {
                res.status(401).json('Incorrect password');
            } else {

            }
        // })
    }
}

module.exports = authController;
