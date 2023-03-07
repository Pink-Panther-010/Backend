const profileService = require('../services/profile.services.js');
const detectionService = require('../services/detections.services.js');
const sensorsService = require('../services/sensors.services.js');
const suspectService = require('../services/suspect.services.js');
const hostConfig = require('../config/host.config');

const getAllDetections = async (req, res) => {
    let offset = parseInt(req.params.offset);
        if(!offset) {
            offset = 0;
        }
    try {
        res.send(await detectionService.getAllDetections(offset));
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const getDetectionsById = async (req, res) => {
    let offset = parseInt(req.params.offset);
        if(!offset) {
            offset = 0;
        }
    try {
        res.send(await detectionService.getDetectionsById(req.params.id, offset));
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const addDetection = async (req, res) => {
    try {

        const profile = await profileService.getProfileByLicensePlate(req.body.license_plate);
        const dangerLevel = await fetch(`${ hostConfig.dangerLevelById }/${ profile._id }`,{
            headers: { authorize: hostConfig.token}
        });
        await suspectService.createDetection({
            _id: profile._id, 
            danger_level: dangerLevel
        });
        //TODO: Retrieve User's danger level via BI team
        //TODO: Store suspect in DB if danger level > threshold
        const sensor = await sensorsService.getSensorById(req.body.sensorId);
        const detection = { _id:profile._id,
             detectedLicense_plate: req.body.license_plate, xLocation: sensor.location_x, 
             yLocation: sensor.location_y, time: new Date() }
        await detectionService.createDetection(detection);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`);
    }
}

module.exports = {
    getAllDetections,
    getDetectionsById,
    addDetection
}
