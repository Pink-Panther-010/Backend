const router = require('express').Router();
const detectionController = require('@/controllers/detection.controller.js')

router.post('/detection', detectionController.addDetection)