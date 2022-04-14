// user run and provide the breed name via this file
// require breedFetcher file, call it's exported function
const { fetchBreedDescription } = require('./breedFetcher');

//take in command line argument
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});


