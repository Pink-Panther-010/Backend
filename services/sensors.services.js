const sensors = require ("../models/sensor.models")

exports.getSensorById = async (id) => {
    await sensors.findById(id)
    if(data === undefined) {
      throw new Error("Error retrieving Profile with id=" + id);
    }

      return data;
}
