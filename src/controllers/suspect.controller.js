const suspectService = require('../services/suspect.services');


exports.getSuspect = async (req, res) => {
  try {
    if (req.params.id) {
      res.send(await suspectService.findSuspectById(req.params.id));
    }
    else {

      res.send(await suspectService.findAllSuspects())
    }
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
}

exports.createSuspect = async (req, res) => {
  try {
    res.send(await suspectService.createSuspect(req.body));
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};
