
const  dbMedori  = require('../models/dbMedori.models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const connectionMadori =  mongoose.createConnection(dbMedori.url);
var SensorSchema = new Schema({
    _id: String,
    location_x: Number,
    location_y: Number,
    place_name: String
}, {collection: 'sensors'});


module.exports = connectionMadori.model('sensors', SensorSchema)
