const images = require ("../models/image.models")

exports.getImageByUrl = async (url) => {
    const data = await images.findOne({_id: url})
    if(data === undefined) {
      throw new Error("Error retrieving Profile with url=" + url);
    }
    
    return data.bytes;
}
