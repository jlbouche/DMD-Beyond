const express = require('express');
const router = express.Router();
const cuisinesCtrl = require('../controllers/cuisines');

/*---------- Public Routes ----------*/
router.get('/:name', cuisinesCtrl.index);


module.exports = router;