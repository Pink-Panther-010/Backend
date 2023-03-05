const detectionModel = require('../models/detectionModel');

exports.getDetections = async () => {
    return await detectionModel.findById().sort({'time': 'asc'})
};

exports.createDetection = async (data, id) => {
    const newDetection = new detectionModel(...data);

    if (detectionModel.findById(id) !== undefined) {
        detectionModel.updateOne({_id: id}, {$push: {detections: newDetection}});
    } else {
        newDetection.save();
    }
    
};