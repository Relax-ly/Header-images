const express = require('express');
// const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 2555;


// request for a listing
app.get('/bug/listing', (req, res) => {
  controller.get(req, res);
});

// uncomment this block if you want to lift CORS policy
// app.get('/api/header-img/listing', cors(), (req, res) => {
//   controller.get(req, res);
// });

app.use('/bug', express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening to port ${port}!`));
