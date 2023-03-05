const db = require("../models/db");
const Profile = db.profiles;

const { ObjectId } = require('mongodb');

// exports.getProfileById= async (id) => {
//     return db
//       .get()
//       .collection("profiles")
//       .findOne({
//         _id: ObjectId(id),
//       });
  
//   };
  

  exports.getProfileById= (req, res) => {
    const id = req.params.id;
    Profile.findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ message: "Not found Profile with id " + id });
        } else {
            res.send(data);
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Profile with id=" + id });
      });
  };
 
  exports.getProfileByLicensePlate= (req, res) => {
    const licensePlate = req.params.licensePlate;
    var condition = licensePlate ? { license_plate: licensePlate } : {};

    Profile.findByLicensePlate(condition)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Profile with license Plate " + licensePlate });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Profile with license Plate=" + licensePlate });
      });
  };

//   exports.getProfileByLicensePlate= async (licensePlate) => {
//     return db
//       .get()
//       .collection("profiles")
//       .findOne({
//         "license_plates": licensePlate
//       })
      
//   };


//not sure if it work
//   exports.getProfileByDifField= async (fieldName, fieldValue) => {
//     return db
//       .get()
//       .collection("profiles")
//       .findMany({
//         fieldName: fieldValue
//       })
      
//   };
