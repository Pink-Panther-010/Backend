const detectionModel = require('../models/detection.models');

exports.getAllDetections = async () => {
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

exports.getDetectionsById = async () => {

};