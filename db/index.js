const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

let listSchema = new mongoose.Schema({
  _id: Number,
  images: [{
    url: String,
    description: String}]
})

let Listing = mongoose.model('Listing', listSchema);

let newListing = (index) => {
  // create array of images
  let imagesArr = [];
  let length = Math.floor(Math.random() * (20 - 7) + 7);
  for (let i = 0; i < length; i++) {
    imagesArr.push({url: 'url', description: 'description'})
  }

  let newListing = new Listing({
    _id: index,
    images: imagesArr
  })

  newListing.save((err) => {
    if (!!err) {
      console.log(err)
    }
  })
}

// *** refactor so that on componentDidMount call this ***
const generate100 = () => {
  for (let i = 1; i <= 100; i++) {
    newListing(i);
  }
}

module.exports = { Listing, generate100 };