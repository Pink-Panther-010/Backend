const db = require("../models/db");
const sensors = db.sensors;

const getSensorById = (id) => {
    sensors.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found Profile with id " + id });
      } else {
        return data;
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Profile with id=" + id });
    });
}

module.exports = {
    getSensorById
}
