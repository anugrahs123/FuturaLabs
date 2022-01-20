const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/futuralab');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    Email:String,
    Password:String,
    Phone:Number,
    Address:String,
    Address2:String,
    City:String,
    State:String,
    Zip:Number


});

var bookdata = mongoose.model('data1',bookSchema);

module.exports = bookdata;