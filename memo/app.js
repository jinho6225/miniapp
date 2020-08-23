const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const port = 3000
const uri = process.env.DB_URI

app.use(express.static('public')) 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
	console.log("DB connected");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})