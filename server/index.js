const express = require('express');
const controller = require('./controller.js');


const app = express();
const port = 2555;


// request for a listing
app.get('/api/header-img/listing', (req, res) => {
  controller.get(req, res);
});


app.use('/api/header-img', express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening to port ${port}!`));
