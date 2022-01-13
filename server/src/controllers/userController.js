const { User, Friend } = require('../models');

const userController = {
    getFriends: async function(req, res) {
        const { userId } = req.user;

        const friends = await Friend.findAll({
            attributes: ['friend_id'],
            where: {
                user_id: userId
            },
        })

        console.log(friends)
    }
}

module.exports = userController;
