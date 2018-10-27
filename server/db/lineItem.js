const conn = require('./conn');

const LineItem = conn.define('line_item', {
    quantity: {
        type: conn.Sequelize.INTEGER,
        defaultValue: 1
    }, 

    price: {
        type: conn.Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = LineItem;