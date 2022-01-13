const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Friend extends Model {};

Friend.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    friend_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'friend'
});

module.exports = Friend;