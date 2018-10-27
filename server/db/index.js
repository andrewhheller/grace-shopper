const conn = require('./conn');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const LineItem = require('./lineItem');
const { createUsers, createProducts, createOrdersWithLineItems } = require('./seed');

User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);

const sync = () => {
    return conn.sync({ force: true });
}

const seed = () => {
    const users = createUsers();
    const products = createProducts();
    const orders = createOrdersWithLineItems();
    return Promise.all(users.map(user => User.create(user)))
        .then(() => {
            return Promise.all(products.map(product => Product.create(product)))
        })
        .then(() => {
            orders.forEach(order => {
                Order.create({ type: order.type, status: order.status, userId: order.userId })
                .then((createdOrder) => {
                    return Promise.all(order.lineItems.map(lineItem => LineItem.create({ ...lineItem, orderId: createdOrder.id })))
                })
            })
        })
}

module.exports = {
    sync,
    seed,
    models: {
        User,
        Product,
        Order,
        LineItem
    }
}