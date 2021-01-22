const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurants');

/*---------- Public Routes ----------*/
router.get('/', restaurantCtrl.restaurantList);
router.get('/:name', restaurantCtrl.detail)


module.exports = router;