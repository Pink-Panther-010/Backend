const sensorService = require('../services/sensors.services');

exports.getSensor = async (req,res) =>{
  try{
    res.send(await sensorService.getSensorById(req.params.id));
  } catch(error){
    res.status(500).send({message: error.massage});
  }
}