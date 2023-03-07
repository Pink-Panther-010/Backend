const imageService = require('../services/images.services');

exports.getImageByUrl = async (req,res) =>{
  try{
    res.send(await imageService.getImageByUrl(req.params.id));
  } catch(error){
    res.status(500).send({message: error.massage});
  }
}
