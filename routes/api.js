const express = require('express');
const router = express.Router();
const models = require('../models');
const Hotel = models.Hotel;
const Activity = models.Activity;
const Restaurant = models.Restaurant;

router.get('/', (req, res, next) => {
  const hotels = Hotel.findAll({
    include: [{all: true}]
  });
  const activities = Activity.findAll({
    include: [{all: true}]
  });
  const restaurants = Restaurant.findAll({
    include: [{all: true}]
  });

  Promise.all([hotels, activities, restaurants])
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

// router.get('/results', (req, res, next) => {
//   fetch('localhost:3000/api')
//   .then(results => results.json())
// })

module.exports = router;
