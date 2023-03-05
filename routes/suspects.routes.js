const express = require('express');
const controllerSuspect = require('../controllers/SuspectController');
const router = new express.Router();


module.exports = router;

router.get('suspects/:id?',controllerSuspect.getSuspect)