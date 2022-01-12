const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: Number(process.env.DB_HOST),
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;