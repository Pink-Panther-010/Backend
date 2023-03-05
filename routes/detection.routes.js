const router = require('express').Router();
const detectionController = require('@/controllers/detection.controller.js')

router.post('', detectionController.addDetection)