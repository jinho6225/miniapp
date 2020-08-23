const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.DB_URI
const db = mongoose.connection;
const router = express.Router();

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, "connection error:"));
exports.db_connect = db.once('open', () => {
	console.log("DB connected");
});
mongoose.set('useFindAndModify', false);
mongoose.set('returnOriginal', false)

module.exports = db;

app.use('/', router);
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var Schema = mongoose.Schema;

var Memo = new Schema({
	author: String,
	contents: String,
	date: Date
});

var memoModel = mongoose.model('Memo', Memo);

app.get('/memo', function(req, res, next) {
	memoModel.find({}, function(err, data){
		res.json(data);
	});
});

app.post('/memo', function(req,res,next) {
	var author = req.body.author;
	var contents = req.body.contents;
	var date = Date.now();
	
	var memo = new memoModel();
	
	memo.author = author;
	memo.contents = contents;
	memo.date = date;
	memo.comments = [];
	
	memo.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
});

app.post('/remove', function(req, res, next) {
	const { _id } = req.body;
	memoModel.findOneAndDelete(_id, function(err) {
		if(err) throw err;
		res.json({status: "SUCCESS"});
	});
});

app.post('/update', function(req, res, next) {
	const { _id } = req.body;
	const { author, contents } = req.body;
	const query = { _id };

	memoModel.findOneAndUpdate(query, { author, contents }, function(err) {
		if(err) throw err;
		res.json({status: "SUCCESS"});
	});
});

module.exports = router;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})