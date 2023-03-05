const express = require('express');
const controllerProfile = require('../controllers/ProfileController');

const router = new express.Router();

router.get('/id/:id/', controllerProfile.getProfileById);
router.get('/licenseNumber/:licenseNumber/', controllerProfile.getProfilesByLicenseNumber);
router.get('/dangerLevel/:dangerLevel', controllerProfile.getProfilesByDangerLevel);

module.exports = router;