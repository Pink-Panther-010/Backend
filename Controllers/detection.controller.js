const profileService = require('../services/profile.services.js');
const detectionService = require('../services/detections.services.js');
const sensorsService = require('../services/sensors.services.js');

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
    try {console.log("fdfdffdsfds")
        console.log(req.body)

        const profile = await profileService.getProfileByLicensePlate(req.body.license_plate);
        //TODO: Retrieve User's danger level via BI team
        //TODO: Store suspect in DB if danger level > threshold
        const sensor = await sensorsService.findById(req.body.sensorId);
        const detection = { xLocation: sensor.location_x, yLocation: sensor.location_y, time: new Date() }
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
