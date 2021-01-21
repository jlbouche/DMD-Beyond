const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurants');

/*---------- Public Routes ----------*/
router.get('/:name', restaurantCtrl.index);


module.exports = router;