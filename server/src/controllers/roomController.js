const { User } = require('../models');

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

        const x = rooms[0].rooms.forEach((room) => {
            const roomId = room.id;
            const friend = room.users.filter((user) => user.id !== userId);
            
            roomsFormated.push({roomId, friend});
        });

        res.status(200).json(roomsFormated);
    }
}

module.exports = roomController;
