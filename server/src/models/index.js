const User = require('./user');
const Friend = require('./friend');
const Room = require('./room');
const Message = require('./message');

User.hasMany(Friend, {
    foreignKey: 'user_id',
    as: 'friends'
});

Friend.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

User.belongsToMany(Room, {
    foreignKey: 'user_id',
    otherKey: 'room_id',
    through: 'user_has_room',
    as: 'rooms'
});

Room.belongsToMany(User, {
    foreignKey: 'room_id',
    otherKey: 'user_id',
    through: 'user_has_room',
    as: 'users'
});

Message.belongsTo(Room, {
    foreignKey: 'room_id',
    as: 'room'
});

Room.hasMany(Message, {
    foreignKey: 'id',
    as: 'messages'
});

Message.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

User.hasMany(Message, {
    foreignKey: 'id',
    as: 'messages'
});

module.exports = { User, Friend, Room, Message };
