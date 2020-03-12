const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let listSchema = new mongoose.Schema({
  _id: Number,
  images: [{
    url: String,
    description: String}]
})

let Listing = mongoose.model('Listing', listSchema);





// let picSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   url: String,
//   description: String
// })

// let picSchema = mongoose.model('Pic', picSchema);


// let ListingEnt = () => {
//   let listingName = 'some random name';
//   for (let i = 0; i < 6; i++) {
//     let newpic = new Pic({
//       id: i,
//       name: listingName, // so we can select pictures with this name and put into array
//       url: 'url',
//       description: 'brief description'
//     })
//     newpic.save((err) => {
//       if (!!err) {
//         console.log(err)
//       }
//     })
//   }

//   let imagesArr // do some query to select all images for listingName

//   let newListing = new Listing({
//   name: listingName,
//   images: imagesArr
//   })

//   newListing.save((err) => {
//     if (!!err) {
//       console.log(err)
//     }
//   })
// }

module.exports = Listing;