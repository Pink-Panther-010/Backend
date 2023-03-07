const express = require('express')
const router = express.Router()
const detectionController = require("../controllers/detection.controller")

router.get('/:offset?', detectionController.getAllDetections);

router.get('/id/:id/:offset?', detectionController.getDetectionsById);

router.post('/', detectionController.addDetection);

module.exports = router;
