const { User, Message } = require('../models');

const roomController = {
    getRooms: async function(req, res) {
        const { userId } = req.user;

        const rooms = await User.findAll({
            attributes: { exclude: ['password'] },
            include: [
                {
                    association: 'rooms',
                    include: [{
                        association: 'users',
                        attributes: ['id', 'username', 'email'],
                    }],
                }
            ],
            where: {
                id: userId
            },
        })

        const roomsFormated = [];

        rooms[0].rooms.forEach((room) => {
            const roomId = room.id;
            const friend = room.users.filter((user) => user.id !== userId);
            
            roomsFormated.push({roomId, friend});
        });

        res.status(200).json(roomsFormated);
    },
    getRoomMessages: async function(req, res) {
        const roomId = req.params.roomId;

        const messages = await Message.findAll({
            where: {
                room_id: roomId
            },
            include: [
                {
                    association: 'user',
                    attributes: ['id', 'username', 'email'],
                }
            ],
            attributes: ['id', 'room_id', 'content', 'timestamp'],
            order: [['timestamp', 'asc']]
        });

        console.log(messages);

        res.status(200).json(messages);
    }
}

module.exports = roomController;
