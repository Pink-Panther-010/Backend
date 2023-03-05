const suspectService = require('../Services/suspectService');


exports.findAll = (req, res) => {
    res.send(suspectService.findAll());
};

exports.findById = (req, res) => {
    res.send(suspectService.findById(req.params.id));
};