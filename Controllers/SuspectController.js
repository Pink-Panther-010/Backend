const suspectService = require('../Services/suspectService');


exports.getSuspect = (req,res) =>{
  req.params.id? res.send(suspectService.findSuspectById(req.params.id)):res.send(suspectService.findAllSuspects());
}
