require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser')
const yelp = require('yelp-fusion');
const apikey = process.env.APIKEY;
const client = yelp.client(apikey);

require('./config/database');

// Require controllers here

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); // this allows express to find the build folder

app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/users'));

// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//API call function
app.post('/api/restaurantsearch', function(req, res){
  const location = req.body
  console.log(location);
  //npm yelp-fusion package includes .search functionality to allow simpler API call
  client.search({
    location: `${location.address}, ${location.city}, ${location.state}`,
    //categories is a Yelp API search call to search businesses with specific class, i.e. restaurants
    categories: 'restaurants',
    //added additional filter to require being open at the time of call
    open_now: true
  }).then(response => {
    //converts businesses into JSON
    const restaurants = response.jsonBody.businesses;
    //below randomizes JSON restaurant results matching location to pick one 
    const restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
    console.log(restaurant);
  })
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
