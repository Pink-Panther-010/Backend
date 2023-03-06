const express = require('express');
const controllerSuspect = require('../controllers/suspect.controller');
const router = new express.Router();


module.exports = router;

router.get('/:id?',controllerSuspect.getSuspect)