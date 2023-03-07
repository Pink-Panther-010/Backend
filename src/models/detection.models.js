
const dbMedori = require('./dbMedori.models')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const connectionMedori = mongoose.createConnection(dbMedori.url);

var detectionsSchema = new Schema({
    id: String,
    detectedLicense_plate: String,
    xLocation: Number,
    yLocation: Number,
    time: Date

}, { collection: 'detections' });

module.exports = connectionMedori.model('detections', detectionsSchema);

