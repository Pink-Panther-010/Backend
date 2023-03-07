const sensors = require ("../models/image.models")

exports.getSensorByUrl = async (url) => {
    const data = await sensors.findOne({url: url})
    if(data === undefined) {
      throw new Error("Error retrieving Profile with url=" + url);
    }

      return data.imageByte;
}
