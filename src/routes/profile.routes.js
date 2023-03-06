const express = require('express');
const controllerProfile = require('../controllers/profile.controller');

const router = new express.Router();

router.get('/:id', controllerProfile.getProfileById);
router.get('/:licenseNumber', controllerProfile.getProfileByLicenseNumber);
router.get('/:dangerLevel', controllerProfile.getProfilesByDangerLevel);

module.exports = router;
