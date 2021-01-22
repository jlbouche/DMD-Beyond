require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const yelp = require('yelp-fusion');
const token = process.env.APIKEY;
const client = yelp.client(token);

require('./config/database');

// Require controllers here

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); // this allows express to find the build folder

app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/users'));

// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//utilizing api search functionality through server.js to simplify routing/eliminate need for extra components/utils
app.post('/api/search', function(req, res){
  const user = req.user;
  client.search({
    location: `${user.city}, ${user.state}`,
    categories: 'restaurants',
  }).then(response => {
    const restaurants = response.jsonBody.businesses;
    const restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
    res.send(restaurant);
  })
})



const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
