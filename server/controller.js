const models = require('./models.js');

// get a listed property by _id
const get = (req, res) => {
  const id = req.query._id;
  models.get(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { get };
