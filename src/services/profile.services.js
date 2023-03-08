const Profile = require("../models/profile.models");
const mongoose = require('mongoose')
exports.getProfileById = async (id) => {
  try{
  const respond = await Profile.findOne({_id: id})
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
  console.log('====================================');
  console.log(licensePlate);
  console.log('====================================');
  const query = licensePlate ? {license_plates:licensePlate} : {}
  const respond = await Profile.findOne(query)
  if( respond === undefined) {
    throw new Error("Profile not found");
  }
  return respond;
};

exports.getProfilesByDangerLevel = (dangerLevel) => { };
