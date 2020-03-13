// const db = require('../db/index.js');

let get = (name, callback) => {
  // do query with name
  callback(null, 'express chain!');
}

module.exports = { get };