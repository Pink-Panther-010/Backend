const profileService = require("../services/profile.services.js");
const detectionService = require("../services/detections.services.js");
const sensorsService = require("../services/sensors.services.js");
const suspectService = require("../services/suspect.services.js");
const hostConfig = require("../config/host.config");
const axios = require("axios");

const getAllDetections = async (req, res) => {
  try {
    res.send(await detectionService.getAllDetections());
  } catch (err) {
    res.status(500).send(`There was a problem - ${err.message}`);
  }
};

const getDetectionsById = async (req, res) => {
  try {
    res.send(await detectionService.getDetectionsById(req.params.id));
  } catch (err) {
    res.status(500).send(`There was a problem - ${err.message}`);
  }
};

const addDetection = async (req, res) => {
  try {
    const profile = await profileService.getProfileByLicensePlate(
      req.body.license_plate
    );
    const url = `${hostConfig.dangerLevelById}/${profile._id}`;
    // const dangerLevel = await axios.get("https://" + url, { headers: { 'authorize': hostConfig.token } })
    //   console.log('====================================');
    //   console.log(dangerLevel);
    //   console.log('====================================');
    const dangerLevel = 3

    await suspectService.createSuspect({
      _id: profile._id,
      danger_level: dangerLevel,
    });
    const sensor = await sensorsService.getSensorById(req.body.sensorId);
    console.log('====================================');
    console.log(sensor);
    console.log('====================================');
    const detection = {
      _id: profile._id,
      detectedLicense_plate: req.body.license_plate,
      xLocation: sensor.location_x,
      yLocation: sensor.location_y,
      time: new Date(),
    };
    await detectionService.createDetection(detection);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(`There was a problem - ${err.message}`);
  }
};

module.exports = {
  getAllDetections,
  getDetectionsById,
  addDetection,
};
