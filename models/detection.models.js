const mongoose = require('mongoose');

module.exports = mongoose => {
    const Detection = mongoose.model('detections', mongoose.Schema({
        detections: [{
            xLocation: Number,
            yLocation: Number,
            time: Date
        }]
    })
    );
    return Detection;
};