const conn = require('./conn');
const User = require('./user');
const Product = require('./product');
const { createUsers, createProducts } = require('./seed');

const sync = () => {
    return conn.sync({ force: true });
}

const seed = () => {
    const users = createUsers();
    const products = createProducts();
    return Promise.all(users.map(user => User.create(user)))
        .then(() => {
            return Promise.all(products.map(product => Product.create(product)))
        })
}

module.exports = {
    sync,
    seed,
    models: {
        User,
        Product
    }
}