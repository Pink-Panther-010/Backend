const suspectModel = require("../models/suspect.models");

exports.findAllSuspects = async () => {
  const data =  await suspectModel.find();
  if(data === undefined) {
    throw new Error("No suspect found");
  }

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
   const data = await suspectModel.findById(id)
   if(data === undefined) {
    throw new Error("No suspect found");
   }
   else {
    return data;
   }
  };
