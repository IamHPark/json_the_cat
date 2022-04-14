const request = require('request');
//API endpoint/URL : https://api.thecatapi.com/v1/breeds/search?q=sib

// fetch the Siberian data from the API endpoint using request.

const fetchBreedDescription = function(breedName, callback) {

  const URL = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  // console.log(URL);

  request(URL, (error, response, body) => {
    //when error occurs
    if (error) {
      console.log('error: ',error);
      return;
    }

    //Edge case : Breed Not Found
    if (body === '[]') {
      console.log('ERORRRRRR!');
      return;
    }
    // when name is found, typeof body: string -> JSON.parse
    const data = JSON.parse(body)[0].description;
    callback(error,data);
  });
};

module.exports = { fetchBreedDescription };