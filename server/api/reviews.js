const { Review } = require('../db').models;
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res, next) => {
  Review.findAll()
    .then(reviews => res.send(reviews))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Review.create(req.body)
    .then(review => res.status(201).send(review))
    .catch(next);
});
