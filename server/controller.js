const models = require('./models.js');

// get a listed property by _id
let get = (req, res) => {
  let id = req.query.id;
  models.get(id, (err, result) => {
    if (!!err) {
      console.log(err);
    } else {
        res.send(result);
      }
  })
}

module.exports = { get }