const conn = require('./conn');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const LineItem = require('./lineItem');
const {
  createUsers,
  createProducts,
  createOrdersWithLineItems,
  createReviews,
} = require('./seed');
const Review = require('./review');

User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);
User.hasMany(Review);
Review.belongsTo(User);
Product.hasMany(Review);
Review.belongsTo(Product);

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  const users = createUsers();
  const products = createProducts();
  const orders = createOrdersWithLineItems();
  const reviews = createReviews();
  return Promise.all(users.map(user => User.create(user)))
    .then(() => {
      return Promise.all(products.map(product => Product.create(product)));
    })
    .then(() => {
      return Promise.all(reviews.map(review => Review.create(review)));
    })
    .then(() => {
      orders.forEach(order => {
        Order.create({
          type: order.type,
          status: order.status,
          userId: order.userId,
        }).then(createdOrder => {
          return Promise.all(
            order.lineItems.map(lineItem =>
              LineItem.create({ ...lineItem, orderId: createdOrder.id })
            )
          );
        });
      });
    });
};

module.exports = {
  sync,
  seed,
  models: {
    User,
    Product,
    Order,
    LineItem,
    Review,
  },
};
