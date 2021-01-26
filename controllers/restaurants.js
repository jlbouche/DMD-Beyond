const yelp = require('yelp-fusion');
const apikey = process.env.APIKEY;
const client = yelp.client(apikey);

module.exports = {
    getRestaurant
  }
  
  function getRestaurant(req, res){
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
        console.log(restaurant)
        res.status(200).json({restaurant: restaurant})
      })
  }