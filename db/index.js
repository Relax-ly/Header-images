const mongoose = require('mongoose');
const faker = require('faker');
const img = require('./images.js');


mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

// schema for a property listing
const listSchema = new mongoose.Schema({
  _id: Number,
  images: [{
    url: String,
    description: String
  }]
});


const Listing = mongoose.model('Listing', listSchema);

// generates a new listing
const createListing = (index) => {
  // create array of images
  const imagesArr = [];
  const length = Math.floor(Math.random() * (20 - 7) + 7);
  for (let i = 0; i < length; i++) {
    imagesArr.push({ url: img.getRandomImage(), description: faker.lorem.sentence() });
  }

  // create a new listing
  const newListing = new Listing({
    _id: index,
    images: imagesArr
  });

  // save the new listing to the database
  newListing.save((err) => {
    if (err) {
      // console.log(err);
    }
  });
};


// seed the database by generates 100 listings
for (let i = 1; i <= 100; i++) {
  createListing(i);
}


module.exports = { Listing };
