const suspectService = require('../services/suspect.services');


exports.getSuspect = async (req,res) =>{

  if(req.params.id){
    await suspectService.findSuspectById(req.params.id);
  }
  else{

    const data  = await suspectService.findAllSuspects();
    res.send(data)
  }
}