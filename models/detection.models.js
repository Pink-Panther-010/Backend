
const dbMedori = require('./dbMedori.models')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const connectionMedori = mongoose.createConnection(dbMedori.url);

var detectionsSchema = new Schema({
    _id: String,
    detections: [{
        xLocation: Number,
        yLocation: Number,
        time: Date
    }, { _id: false }]
},{collection:'detections'});

module.exports = connectionMedori.model('detections', detectionsSchema);

