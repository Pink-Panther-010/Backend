const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const detectionSchema = new Schema({
    id: Schema.Types.ObjectId,
    detections: [{
        xLocation: Number,
        yLocation: Number,
        time: Date
    }]
});
const Detection = mongoose.model('Detection', detectionSchema);
module.exports = Detection;