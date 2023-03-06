const Profile = require("../models/profile.models");

exports.getProfileById = (id) => {
  Profile.findById(id)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message + "Error retrieving Profile with id=" + id);
    });
};

exports.getProfileByLicensePlate = (licensePlate) => {
  Profile.find(licensePlate ? { license_plate: licensePlate } : {})
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message + "Error retrieving Profile with license Plate=" + licensePlate);
    });
};

exports.getProfilesByDangerLevel = (dangerLevel) => {};
