const profileService = require('../services/profile.services.js');
const detectionService = require('../services/detections.services.js');
const sensorsService = require('../services/sensors.services.js');
const BiUrlDangerById = require('../config/host.config');

const getAllDetections = async (req, res) => {
    try {
        res.send(await detectionService.getAllDetections());
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const getDetectionsById = async (req, res) => {
    try {
        res.send(await detectionService.getDetectionsById(req.params.id));
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const addDetection = async (req, res) => {
    try {

        const profile = await profileService.getProfileByLicensePlate(req.body.license_plate);
        const dangerLevel = await fetch(`${BiUrlDangerById}/${profile._id}`);
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
