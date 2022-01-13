const User = require('./user');
const Friend = require('./friend');

User.hasMany(Friend, {
    foreignKey: 'user_id',
    as: 'friends'
});

Friend.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

module.exports = { User, Friend };