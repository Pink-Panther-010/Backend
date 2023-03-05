const detectionModel = require('../models/detectionModel');

exports.getDetections = async () => {
    return await detectionModel.findById().sort({'time': 'asc'})
};

exports.createDetection = async (data) => {
    const newDetection = new detectionModel(...data);
    newDetection.save();
};