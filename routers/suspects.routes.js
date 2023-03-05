const express = require('express');
const controllerSuspect = require('@/Controllers/SuspectController');

const router = new express.Router();

router.get('/suspects', controllerSuspect.getSuspect);

router.get('/suspects/:id', controllerSuspect.getSuspect(id));

module.exports = router;
