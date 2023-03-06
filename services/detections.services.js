const detectionModel = require('../models/detection.models');

exports.getAllDetections = async () => {
    return await detectionModel.find().sort({'time': 'asc'});
};

exports.createDetection = async (data, id) => {
    const newDetection = new detectionModel(...data);

    if (detectionModel.findById(id) !== undefined) {
        detectionModel.updateOne({_id: id}, {$push: {detections: newDetection}});
    } else {
        newDetection.save();
    }
    
};

exports.getDetectionsById = async (id) => {
    return await detectionModel.findById({_id: id}).sort({'time': 'asc'});
};