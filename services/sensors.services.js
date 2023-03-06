const sensors = require ("../models/sensors.models")

const getSensorById = (id) => {
    sensors.findById(id)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message + "Error retrieving Profile with id=" + id);
    });
}

module.exports = {
    getSensorById
}
