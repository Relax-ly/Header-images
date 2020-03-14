const db = require('../db')

let get = (id, callback) => {
  db.Listing.find({_id: 1}).exec((err, listing) => {callback(null, listing)});
}

module.exports = { get };