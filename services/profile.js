const db = require("../db/db");
const { ObjectId } = require('mongodb');

exports.getProfileById= async (id) => {
    return db
      .get()
      .collection("profiles")
      .findOne({
        _id: ObjectId(id),
      });
  
  };
  
  exports.getProfileByLicensePlate= async (licensePlate) => {
    return db
      .get()
      .collection("profiles")
      .findOne({
        "license_plates": licensePlate
      })
      
  };

  exports.getProfileByDifField= async (fieldName, fieldValue) => {
    return db
      .get()
      .collection("profiles")
      .findMany({
        fieldName: fieldValue
      })
      
  };
