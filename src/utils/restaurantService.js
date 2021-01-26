const yelp = require('yelp-fusion');
const apikey = process.env.APIKEY;
const client = yelp.client(apikey);

const BASE_URL = '/api/restaurantsearch'

function getRestaurant(req) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(req)
  })
  .then(res => {
    return res.json();
})}

export default {
  getRestaurant
}