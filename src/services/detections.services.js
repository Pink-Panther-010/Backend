const detectionModel = require('../models/detection.models');
const AMOUNT = 5;

exports.getAllDetections = async (offset) => {
    const data = await detectionModel.find({}).skip(AMOUNT * offset)
    .limit( AMOUNT ).sort({ time: '-date'});;

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

exports.getDetectionsById = async (id, offset) => {
    const data = await detectionModel.findById({_id: id}).skip(AMOUNT * offset)
    .limit( AMOUNT ).sort({ time: '-date' });

    if(data === undefined) {
        throw new Error(`No detections were found for ID ${id}`);
    } else {
        return data;
    }
};