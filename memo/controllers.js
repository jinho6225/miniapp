const db = require('./db')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Memo = new Schema({
	author: String,
	contents: String,
	date: Date
});

const memoModel = mongoose.model('Memo', Memo);

//find

//create

//update

//delete