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

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var detectionsSchema = new Schema({
    detections: [{
        xLocation: Number,
        yLocation: Number,
        time: Date
    }]
});

module.exports = mongoose.model('detections', detectionsSchema)

