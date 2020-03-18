const db = require('../db');

// get listing by id
const get = (id, callback) => {
  db.Listing.find({ _id: id }).exec((err, listing) => { callback(null, listing); });
};

module.exports = { get };
