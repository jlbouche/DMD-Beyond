const express = require('express');
const router = express.Router();
const cuisinesCtrl = require('../controllers/cuisines');

/*---------- Public Routes ----------*/
router.get('/:cuisine_name', cuisinesCtrl.index);


module.exports = router;