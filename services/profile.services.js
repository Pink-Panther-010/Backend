const Profile = require("../models/profile.models");
const mongoose = require('mongoose')
exports.getProfileById = async (id) => {
  try{
  const respond = await Profile.find({_id: id})
  if (respond === undefined) {
    throw new Error("Profile not found");
  }
    return respond;
    // .catch((err) => {
    //   console.log(err.message + "Error retrieving Profile with id=" + id);
    // });
}
catch(err){
  console.log(err.message)

}
};

exports.getProfileByLicensePlate = async (licensePlate) => {
  const respond = await Profile.findOne(licensePlate ? { license_plates: licensePlate } : {})
  if( respond === undefined) {
    throw new Error("Profile not found");
  }
  return respond;
};

exports.getProfilesByDangerLevel = (dangerLevel) => { };
