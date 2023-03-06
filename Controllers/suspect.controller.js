const suspectService = require('../services/suspect.services');


exports.getSuspect = async (req,res) =>{

  if(req.params.id){
    res.send(await suspectService.findSuspectById(req.params.id));
  }
  else{

    res.send(await suspectService.findAllSuspects())
  }
}