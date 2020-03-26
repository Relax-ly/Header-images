const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 2555;

// lifted CORS policy
// get listing by id
app.get('/bug/listing', cors(), (req, res) => {
  controller.get(req, res);
});

// serve static page
app.use('/bug', express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening to port ${port}!`));
