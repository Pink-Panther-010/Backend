const profileService = require('../services/profile.services.js');
const detectionService = require('../services/detections.services.js');
const sensorsService = require('../services/sensors.services.js');

const getAllDetections = async (req, res) => {
    try {
        const detections = detectionService.getAllDetections()
        res.send(detections);
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const getDetectionsById = (req, res) => {

}

const addDetection = (req, res) => {
    try {
        const profile = profileService.getProfileByLicensePlate(req.body.license_plate);
        //TODO: Retrieve User's danger level via BI team
        //TODO: Store suspect in DB if danger level > threshold
        const sensor = sensorsService.findById(req.body.sensorId);
        const detection = { locX: sensor.locX, locY: sensor.locY, time: new Date() }
        detectionService.createDetection(detection, profile.id);

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
