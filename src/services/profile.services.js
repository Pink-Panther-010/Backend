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
  if(!licensePlate.includes("-")){
    licensePlate = licensePlate.replace(/(\d+)/g, function (_, num){
      return '-' + num + '-';
  });
  licensePlate = licensePlate.trim().slice(1, -1);

}
  const query = licensePlate ? {license_plates:licensePlate} : {}
  const respond = await Profile.find(query)
  if( respond === undefined) {
    throw new Error("Profile not found");
  }
  return respond;
};

exports.getProfilesByDangerLevel = (dangerLevel) => { };
