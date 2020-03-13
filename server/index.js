const express = require('express');
const path = require('path');

const app = express()
const port = 3000


app.use('/header-img', express.static(__dirname + '/../client/dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))