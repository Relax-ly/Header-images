const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 2555;


// serve static page
app.use('/headerimg/', express.static(__dirname + '/../client/dist'));

// lifted CORS policy
// get listing by id
app.get('/headerimg/listing', cors(), (req, res) => {
  controller.get(req, res);
});

app.listen(port, () => console.log(`Listening to port ${port}!`));
