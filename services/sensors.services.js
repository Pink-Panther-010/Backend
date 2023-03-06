const sensors = require ("../models/sensor.models")

exports.getSensorById = async (id) => {
    const data = await sensors.find({_id: id})
    if(data === undefined) {
      throw new Error("Error retrieving Profile with id=" + id);
    }

      return data;
}
