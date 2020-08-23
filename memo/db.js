const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.DB_URI

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
exports.db_connect = db.once('open', () => {
	console.log("DB connected");
});

module.exports = db;