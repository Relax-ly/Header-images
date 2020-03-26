const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const port = 2555;


// serve static page
app.use('/', express.static(__dirname + '/../client/dist'));


// lifted CORS policy
// get listing by id
app.get('/listing/', cors(), (req, res) => {
  controller.get(req, res);
});

// serve the html file with the listing number
app.get('/*', cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.listen(port, () => console.log(`Listening to port ${port}!`));
