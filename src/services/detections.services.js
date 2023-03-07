const detectionModel = require('../models/detection.models');

exports.getAllDetections = async () => {
    const data = await detectionModel.find({});

    if(data === undefined) {
        throw new Error('No detections were found');
    } else {
        return data;
    }
};

exports.createDetection = async (data) => {
       const newDetectiobModel = new detectionModel(data)
       console.log(newDetectiobModel);
        await newDetectiobModel.save();
};

exports.getDetectionsById = async (id) => {
    const data = await detectionModel.findById({_id: id});

    if(data === undefined) {
        throw new Error(`No detections were found for ID ${id}`);
    } else {
        return data;
    }
};