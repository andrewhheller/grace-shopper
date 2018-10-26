const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);
const Op = Sequelize.Op;

const Product = conn.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/jpgimage',
  },
  categories: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    validate: {
      notEmpty: true,
    },
  },
});

Product.findByCategory = function(category) {
  return this.findAll({
    where: {
      categories: {
        [Op.contains]: [category],
      },
    },
  });
};
module.exports = Product;
