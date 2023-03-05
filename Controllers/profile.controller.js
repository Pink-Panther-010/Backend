const profileService = require('../services/profile.services.js')

const getProfileById = (req, res) => {
    res.send(profileService.getProfileById(req.params.id));
};

const getProfileByLicenseNumber = (req, res) => {
    res.send(profileService.getProfileByLicensePlate(req.params.licenceNumber));
};

const getProfilesByDangerLevel = (req, res) => {
    res.send(profileService.getProfilesByDangerLevel(req.params.licenceNumber));
};

module.exports = {
    getProfileById,
    getProfileByLicenseNumber,
    getProfilesByDangerLevel,
}