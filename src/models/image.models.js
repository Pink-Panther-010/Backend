const  db  = require('../models/db.models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const connection =  mongoose.createConnection(db.url);
var SensorSchema = new Schema({
    url: String,
    imageByte: String,
}, {collection: 'images'});


module.exports = connection.model('images', SensorSchema)
