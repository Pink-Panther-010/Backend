const profileService = require('../services/profile.services.js')

const getProfileById = async(req, res) => {
    try{
    res.send(await profileService.getProfileById(req.params.id));
    }catch(err){
        res.status(500).send(err);
    }
};

const getProfileByLicenseNumber = (req, res) => {
    try{
    res.send(profileService.getProfileByLicensePlate(req.params.licenceNumber));
    }catch(err){
        res.status(500).send(err);
    }
};

const getProfilesByDangerLevel = (req, res) => {
    try{
    res.send(profileService.getProfilesByDangerLevel(req.params.dangerLevel));
    } catch(err){
        res.status(500).send(err);
    }
};

module.exports = {
    getProfileById,
    getProfileByLicenseNumber,
    getProfilesByDangerLevel,
};