const bcrypt = require('bcrypt');

const authController = {
    postRegister: function(req, res) {
        // get data from request
        const { name, email, password } = req.body;
        // 1- check if email already has an account in DB

        // if not store new user in DB
        bcrypt.hash(password, 10).then((hash) => {
            // insert into DB
        }).then(() => {
            res.json('User registerd');
            // res.json({logged: true, token: jsonwebtoken...})
        }).catch((err) => {
            res.status(401).json({ error: err })
        });
    }
}

module.exports = authController;
