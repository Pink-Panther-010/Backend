
const  dbMedori  = require('../models/dbMedori.models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const connectionMadori =  mongoose.createConnection(dbMedori.url);
var SensorSchema = new Schema({
    
    location_x: Number,
    location_y: Number
});


module.exports = connectionMadori.model('sensors', SensorSchema)
