const conn = require('./conn');

const LineItem = conn.define('line_item', {
    quantity: {
        type: conn.Sequelize.INTEGER,
        allowNull: false
    }, 

    price: {
        type: conn.Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = LineItem;