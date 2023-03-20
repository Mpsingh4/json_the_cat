const request = require('request');
let breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

const breedFetcher = (breedName, callback) => {
  request(url, (error, resp, body) => {
    if (error) {
      callback(`Theres been an error: ${error}`);
      console.log(error.name);
    }

    const data = JSON.parse(body);
    const breed = data[0].description;
    console.log(breed);
  });
};

breedFetcher();