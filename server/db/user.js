const conn = require('./conn');

const User = conn.define('user', {
    firstName: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userName: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    isAdmin: {
        type: conn.Sequelize.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = User