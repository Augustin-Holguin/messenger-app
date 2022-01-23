const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Room extends Model {};

Room.init({
    
}, {
    sequelize,
    tableName: 'room'
});

module.exports = Room;