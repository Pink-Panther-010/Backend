const express = require('express');
const controllerSensor = require('../controllers/sensor.controller');
const router = new express.Router();


module.exports = router;

router.get('/:id?',controllerSensor.getSensor)