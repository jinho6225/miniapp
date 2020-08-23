const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const path = require('path');

app.use('/', router);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})