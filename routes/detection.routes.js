const express = require('express')
const router = express.Router()
const detectionController = require('../controllers/detection.controller')

router.get('/', detectionController.getAllDetections);

router.get('/:id', detectionController.getDetectionsById);

router.post('/', detectionController.addDetection);

module.exports = router;
