const conn = require('./conn');
const Sequelize = require('sequelize');

const Review = conn.define('review', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Review;
