const  dbMedori  = require('../models/dbMedori.models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const connectionMadori =  mongoose.createConnection(dbMedori.url);

console.log('====================================');
console.log(connectionMadori);
console.log('====================================');
var suspectSchema = new Schema({
    danger_level: { type: Number, max: 3 },
});




module.exports = connectionMadori.model('suspects', suspectSchema)
