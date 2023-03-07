const sensorService = require('../services/images.services');

exports.getImageByUrl = async (req,res) =>{
  try{
    res.send(await sensorService.getImageByUrl(req.params.url));
  } catch(error){
    res.status(500).send({message: error.massage});
  }
}
