require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

require('./config/database');

// Require controllers here

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); // this allows express to find the build folder

app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
