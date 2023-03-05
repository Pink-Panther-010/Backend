const express = require('express');
const controllerSuspect = require('../Controllers/SuspectController');
const router = new express.Router();


module.exports = router;

router.get('suspects/:id?',controllerSuspect.getSuspect)