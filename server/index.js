const express = require('express');
const path = require('path');
const controller = require('./controller.js');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express()
const port = 3000

app.get(`/header-img/1`, (req, res) => {
  controller.get(req, res);
});

app.get(`/header-img/get100`, (req, res) => {
  db.generate100();
});

app.use('/header-img', express.static(__dirname + '/../client/dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))