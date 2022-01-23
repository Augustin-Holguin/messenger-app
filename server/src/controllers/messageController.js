const { Message, User } = require('../models'); 

const messageController = {
    postMessage: async function(req, res) {
        const { userId } = req.user;
        const { content, room_id } = req.body;

        console.log('hooooooooooo')

        try {
            const newMsg = await Message.create({
                content,
                room_id,
                user_id: userId
            });

            const user = await User.findOne({
                where: {
                    id: userId
                },
                attributes: ['id', 'username', 'email']
            });

            const id = newMsg.id;

            const msgObj = {id, content, room_id, userId, user};
            
            res.status(200).json(msgObj);
        } catch (error) {
            res.status(500).json({error: 'Error while inserting new message'});
        }
    }
}

module.exports = messageController;
