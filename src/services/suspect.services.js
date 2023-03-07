const suspectModel = require("../models/suspect.models");

exports.findAllSuspects = async () => {
  const data =  await suspectModel.find();
  if(data === undefined) {
    throw new Error("No suspect found");
  }

    return data;
}



  exports.findSuspectById = async (id) => {
   const data = await suspectModel.findById(id)
   if(data === undefined) {
    throw new Error("No suspect found");
   }
   else {
    return data;
   }
  };

  exports.createSuspect = async (suspect) => {
    try{
    const newSuspect = new suspectModel(suspect);
    await newSuspect.save();
    }
    catch(err) {
      throw new Error(err.massage);
    }
  }
