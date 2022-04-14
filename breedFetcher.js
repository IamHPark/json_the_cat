const request = require('request');
//API endpoint/URL : https://api.thecatapi.com/v1/breeds/search?q=sib
//take in command line argument
const args = process.argv.slice(2);
const name = args[0];

const URL = `https://api.thecatapi.com/v1/breeds/search?name=${name}`;
// console.log(URL);

// fetch the Siberian data from the API endpoint using request.
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
  console.log(data);
});
