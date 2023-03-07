const  dbMedori  = require('../models/dbMedori.models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const connectionMadori =  mongoose.createConnection(dbMedori.url);

var suspectSchema = new Schema({
    _id: String,
    danger_level: { type: Number, max: 3 },
});




module.exports = connectionMadori.model('suspects', suspectSchema)
