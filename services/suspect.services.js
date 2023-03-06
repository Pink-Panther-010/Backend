const suspectModel = require("../models/suspect.models");

exports.findAllSuspects = async () => {
  const data = await suspectModel.find();
  return data;
}


// exports.findAllSuspects = async () => {
//     suspectModel.find({})
//       .then((data) => {
//         return data;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

  exports.findSuspectById = async (id) => {
    suspectModel.findById(id)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  };
