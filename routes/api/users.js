const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer  = require('multer');
const upload = multer();

/*---------- Public Routes ----------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);


module.exports = router;