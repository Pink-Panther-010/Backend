const profileService = ('../services/profile.js');
const detectionService = ('../services/detections.services.js');
const sensorsService = ('../services/sensors.services.js');

const getAllDetections = (req, res) => {

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
        res.status(500).send("there was a problem" + err.massage);
    }
}

module.exports = {
    getAllDetections,
    getDetectionsById,
    addDetection
}
