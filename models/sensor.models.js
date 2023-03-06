
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorSchema = new Schema({
    location_x: Number,
    location_y: Number
});

module.exports = mongoose.model('sensors', SensorSchema)