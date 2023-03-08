const  db  = require('../models/db.models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const connection =  mongoose.createConnection(db.url);
var ImageSchema = new Schema({
    _id: String,
    bytes: Array,
}, {collection: 'pictures'});


module.exports = connection.model('pictures', ImageSchema)
