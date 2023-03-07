const profileService = require('../services/profile.services.js')

const getProfileById = async(req, res) => {
    try{
    res.send(await profileService.getProfileById(req.params.id));
    }catch(err){
        res.status(500).send(err);
    }
};

const getProfileByLicenseNumber = async (req, res) => {
    try{
    res.send( await profileService.getProfileByLicensePlate(req.params.licenseNumber));
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
