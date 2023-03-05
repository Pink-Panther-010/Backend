const suspectService = require('../Services/suspectService');


exports.findAll = (req, res) => {
    res.send(suspectService.findAllSuspects());
};

exports.findById = (req, res) => {
    res.send(suspectService.findSuspectById(req.params.id));
};