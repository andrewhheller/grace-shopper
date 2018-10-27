const conn = require('./conn');

const Order = conn.define('order', {
    id: {
        type: conn.Sequelize.UUID,
        defaultValue: conn.Sequelize.UUIDV4,
        primaryKey: true
    },
    type: {
        type: conn.Sequelize.ENUM('CART', 'ORDER'),
        allowNull: false,
        defaultValue: 'CART'
    },
    status: {
        type: conn.Sequelize.ENUM('CREATED','PROCESSING','COMPLETED','CANCELLED'),
        allowNull: false,
        defaultValue: 'CREATED'
    }
});

module.exports = Order;