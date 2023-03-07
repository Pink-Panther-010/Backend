const images = require ("../models/image.models")

exports.getImageByUrl = async (url) => {
  console.log(url)
    const data = await images.findOne({_id: url})
    if(data === undefined) {
      throw new Error("Error retrieving Profile with url=" + url);
    }
    console.log(data)
      console.log(data.bytes)
      return data.bytes;
}
