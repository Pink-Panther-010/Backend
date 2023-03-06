const Profile = require("../models/profile.models");

exports.getProfileById = async (id) => {
  const respond = await  Profile.findById(id)
  if (respond === undefined) {
    throw new Error("Profile not found");
  }
    return respond;
    // .catch((err) => {
    //   console.log(err.message + "Error retrieving Profile with id=" + id);
    // });
};

exports.getProfileByLicensePlate = async (licensePlate) => {
  const respond = await Profile.find(licensePlate ? { license_plate: licensePlate } : {})
  if( respond === undefined) {
    throw new Error("Profile not found");
  }
  return respond;
};

exports.getProfilesByDangerLevel = (dangerLevel) => { };
