const express = require('express')
const router = express.Router()
const detectionController = require('../controllers/detection.controller')

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    let detections = null;

    if(!id) {
        detections = detectionController.getAllDetections();
    } else {
        detections = detectionController.getDetectionsById(id);
    }

    res.send(detections);
});

router.post('/', detectionController.addDetection);

module.exports = router;
