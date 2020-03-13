const models = require('./models.js');

let get = (req, res) => {
  let index = req.query.index;
  models.get(index, (err, result) => {
    if (!!err) {
      console.log(err);
    } else {
        res.send(result);
      }
  })
}

module.exports = { get }