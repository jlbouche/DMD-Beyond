const express = require('express');
const router = express.Router();
const path = require('path');
const yelp = require('yelp-fusion');
const apikey = process.env.APIKEY;
const client = yelp.client(apikey);
const restaurantCtrl = require('../controllers/restaurants')

router.post('/', restaurantCtrl.getRestaurant)

module.exports = router;