const express = require('express');
const controllerProfile = require('../controllers/ProfileController');

const router = new express.Router();

router.get('/profile/:id/', controllerProfile.getProfile);
router.get('/profile/:licenseNumber/', controllerProfile.getProfile);
router.get('/profile/:dangerLevel', controllerProfile.getProfile);

module.exports = router;