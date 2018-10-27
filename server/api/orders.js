const db = require('../db');
const { Order, LineItem } = db.models;
const express = require('express');
const router = express.Router();

module.exports = router;

/** This will be used by the Admin **/

// Gets all orders
router.get('/', (req, res, next) => {
    Order.findAll({
        include: [ LineItem ],
        order: [ ['createdAt', 'DESC'] ]
    }).then(orders => res.send(orders))
    .catch(next);
});

//Updates order status: (PROCESSING, COMPLETED)
router.put('/:id', (req, res, next) => {
    Order.findById(req.params.id, { include: [ LineItem ] })
        .then(order => order.update(req.body))
        .then(order => res.send(order))
        .catch(next);
});