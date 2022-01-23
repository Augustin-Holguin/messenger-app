const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Message extends Model {};

Message.init({
    content: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false    
    }
}, {
    sequelize,
    tableName: 'message'
});

module.exports = Message;