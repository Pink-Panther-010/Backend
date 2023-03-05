const suspectModel = require("../models/suspect.models");

exports.findAllSuspects = () => {
    suspectModel.findAll()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  exports.findSuspectById = (id) => {
    suspectModel.findById(id)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  };
