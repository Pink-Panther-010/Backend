// const mongoose = require('mongoose');

// module.exports = mongoose => {
//     const Detection = mongoose.model('detections', mongoose.Schema({
//         detections: [{
//             xLocation: Number,
//             yLocation: Number,
//             time: Date
//         }]
//     })
//     );
//     return Detection;
// };

const dbMedori = require('../models/dbMedori.models')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const connectionMedori = mongoose.createConnection(dbMedori.url);

var detectionsSchema = new Schema({
    detections: [{
        xLocation: Number,
        yLocation: Number,
        time: Date
    }]
});

module.exports = connectionMedori.model('detections', detectionsSchema);

