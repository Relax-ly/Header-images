const express = require('express');
const path = require('path');
const controller = require('./controller.js');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.get(`/header-img/1`, (req, res) => {
  controller.get(req, res);
});

app.use('/header-img', express.static(__dirname + '/../client/dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))