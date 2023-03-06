const detectionModel = require('../models/detection.models');

exports.getAllDetections = async () => {
    const data = await detectionModel.find({});

    if(data === undefined) {
        throw new Error('No detections were found');
    } else {
        return data;
    }
};

exports.createDetection = async (data, id) => {
    const newDetection = new detectionModel({...data});

    if (detectionModel.find({_id: id}) !== undefined) {
        detectionModel.updateOne({_id: id}, {$push: {detections: newDetection}});
    } else {
        console.log('====================================');
        console.log(newDetection);
        console.log('====================================');
        newDetection.save();
    }
    
};

exports.getDetectionsById = async (id) => {
    const data = await detectionModel.findById({_id: id});

    if(data === undefined) {
        throw new Error(`No detections were found for ID ${id}`);
    } else {
        return data;
    }
};