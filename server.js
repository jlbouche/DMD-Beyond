require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const yelp = require('yelp-fusion');
const apikey = process.env.APIKEY;
const client = yelp.client(apikey);

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
//calling API restaurant search here to simplify code
app.post('/api/search', function(req, res){
  //have to define user to get location data for API
  const user = req.user;
  //npm yelp-fusion package includes .search functionality to allow simpler API call
  client.search({
    location: `${user.city}, ${user.state}`,
    //categories is a Yelp API search call to search businesses with specific class, i.e. restaurants
    categories: 'restaurants',
  }).then(response => {
    //converts businesses into JSON
    const restaurants = response.jsonBody.businesses;
    //below randomizes JSON restaurant results matching location to pick one 
    const restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
    res.send(restaurant);
  })
})



const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
