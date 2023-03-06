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
    const newDetection = {
        xLocation:data.xLocation,
        yLocation:data.yLocation,
        time:data.time,
    }
    if (await detectionModel.findOne({_id: id})) {
       await detectionModel.updateOne({_id: id}, {$push: {detections: newDetection}});
    } 
    else {
       const newDetectiobModel = new detectionModel({
            _id:id,
            detections:[
                newDetection,
            ]
        })
        console.log('====================================');
        console.log(newDetectiobModel);
        console.log('====================================');
        await newDetectiobModel.save();
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