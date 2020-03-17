const express = require('express');
const path = require('path');
const controller = require('./controller.js');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express()
const port = 2555

// request the listing
app.get(`/header-img/listing`, (req, res) => {
  controller.get(req, res);
});

// on componentDidMount(), populate the database
app.get(`/header-img/get100`, (req, res) => {
  db.generate100();
  res.send('database was seeded')
});

app.use('/header-img', express.static(__dirname + '/../client/dist'))

app.listen(port, () => console.log(`Listening to port ${port}!`))