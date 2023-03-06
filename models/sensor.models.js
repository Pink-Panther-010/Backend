const mongoose = require('mongoose');

module.exports = mongoose => {
    const Sensor = mongoose.model('sensors', mongoose.Schema({
        location_x: Number,
        location_y: Number
    })
    );
    return Sensor;
};