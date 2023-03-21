const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    } 
    if (error && response.statusCode !== 200) {
      console.log('Error: Invalid breed name');
      callback(error, 'Error: Invalid breed name');
    }
  });
};

module.exports = { fetchBreedDescription };