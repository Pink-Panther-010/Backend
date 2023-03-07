const suspectModel = require("../models/suspect.models");

exports.findAllSuspects = async () => {
  const data =  await suspectModel.find();
  if(data === undefined) {
    throw new Error("No suspect found");
  }

    return data;
}



  exports.findSuspectById = async (id) => {
   const data = await suspectModel.findOne({_id: id})
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
      throw new Error(err.message);
    }
  }

  exports.updateSuspect = async (id, dangerLevel) => {
    try{
    await suspectModel.findOneAndUpdate({_id: id},{danger_level: dangerLevel});
    }
    catch(err) {
      throw new Error(err.message);
    }
  }
