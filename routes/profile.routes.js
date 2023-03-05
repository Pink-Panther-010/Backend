const express = require('express');
const controllerProfile = require('../controllers/profile.controller');

const router = new express.Router();

router.get('/id/:id/', controllerProfile.getProfileById);
router.get('/licenseNumber/:licenseNumber/', controllerProfile.getProfileByLicenseNumber);
router.get('/dangerLevel/:dangerLevel', controllerProfile.getProfilesByDangerLevel);

module.exports = router;