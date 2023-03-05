const express = require('express');
const controllerProfile = require('../controllers/profile.controller');

const router = new express.Router();

router.get('/profile/:id/:licenseNumber/:dangerLevel', controllerProfile.getProfile);

module.exports = router;