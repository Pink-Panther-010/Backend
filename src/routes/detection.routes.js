const express = require('express')
const router = express.Router()
const detectionController = require("../controllers/detection.controller")

router.get('/offset?/:offset?', detectionController.getAllDetections);

router.get('/id/:id/offset?/:offset?', detectionController.getDetectionsById);

router.post('/', detectionController.addDetection);

module.exports = router;
