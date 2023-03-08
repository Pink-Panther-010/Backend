const profileService = require("../services/profile.services.js");
const detectionService = require("../services/detections.services.js");
const sensorsService = require("../services/sensors.services.js");
const suspectService = require("../services/suspect.services.js");
const hostConfig = require("../config/host.config");
const superagent = require("superagent");

const getAllDetections = async (req, res) => {
    let offset = parseInt(req.params.offset);
    if (!offset) {
        offset = 0;
    }
    try {
        res.send(await detectionService.getAllDetections(offset));
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const getDetectionsById = async (req, res) => {
    let offset = parseInt(req.params.offset);
    if (!offset) {
        offset = 0;
    }
    try {
        res.send(await detectionService.getDetectionsById(req.params.id, offset));
    } catch (err) {
        res.status(500).send(`There was a problem - ${err.message}`)
    }
}

const addDetection = async (req, res) => {
  let profile;
  try {
    if(req.body.license_plate) {
       profile = (await profileService.getProfileByLicensePlate(
      req.body.license_plate
    ))[0]
    
    
    }
    else if(req.body.id) {
      profile = await profileService.getProfileById(req.body.id);
    }
    else {
      throw new Error("Please provide either a license plate or an id");
    }
    // const url = `${hostConfig.dangerLevelById}/${profile._id}`;
    // const dangerLevel = await superagent.get("https://" + url).set('authorize',hostConfig.token)
    // console.log('========================');
    // console.log(dangerLevel.body);
    // console.log('====================================');
      //  headers: ({ 'Authorization': hostConfig.token } );
      //  console.log('====================================');
      //  console.log(dangerLevel);
      //  console.log('====================================');
     const dangerLevel = 2
 
    if(!await suspectService.findSuspectById(profile._id)){
        await suspectService.createSuspect({
            _id: profile._id,
            danger_level: dangerLevel,
          });
    }
    else{
        await suspectService.updateSuspect(profile._id,dangerLevel);
    }
    const sensor = await sensorsService.getSensorById(req.body.sensorId);
    const detection = {
      id: profile._id,
      detectedLicense_plate: req.body.license_plate,
      xLocation: sensor.location_x,
      yLocation: sensor.location_y,
      time: new Date(),
      place_name: sensor.place_name
    };
    await detectionService.createDetection(detection);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(`There was a problem - ${err.message}`);
  }
};


const detectionFromBodel = async (data) => {
  let profile;
  try {
    if(data.plate_number) {
       profile = (await profileService.getProfileByLicensePlate(
      data.plate_number
    ))[0]
    
    }
    else if(data.id_number) {
      profile = await profileService.getProfileById(data.id_number);
    }
    else {
      throw new Error("Please provide either a license plate or an id");
    }
    const url = `${hostConfig.dangerLevelById}/${profile._id}`;
    const dangerLevel = await superagent.get("https://" + url).set('authorize',hostConfig.token) 
    if(!await suspectService.findSuspectById(profile._id)){
        await suspectService.createSuspect({
            _id: profile._id,
            danger_level: dangerLevel,
          });
    }
    else{
        await suspectService.updateSuspect(profile._id,dangerLevel);
    }
    const sensor = await sensorsService.getSensorById(data.sensor_id);
    const detection = {
      id: profile._id,
      detectedLicense_plate: data.license_plate?data.license_plate:"No license plate detected",
      xLocation: sensor.location_x,
      yLocation: sensor.location_y,
      time: new Date(),
      place_name: sensor.place_name
    };
    await detectionService.createDetection(detection);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(`There was a problem - ${err.message}`);
  }
};


// const  = async (data) => {
//   let profile
//   try {
//     if(data.plate_number) {
//      profile = await profileService.getProfileByLicensePlate(
//       data.plate_number
//     );
//     }
//     else if(data.id_number) {
//       profile = await profileService.getProfileById(data.id_number);
//     }
//     else {
//       throw new Error("Please provide either a license plate or an id");
//     }
//     const url = `${hostConfig.dangerLevelById}/${data.id_number}`;
//     const dangerLevel = await superagent.get("https://" + url).set('authorize',hostConfig.token)
//     //  const dangerLevel = 2
//     if(!await suspectService.findSuspectById(profile._id)){
//         await suspectService.createSuspect({
//             _id: profile._id,
//             danger_level: dangerLevel,
//           });
//     }
//     else{
//         await suspectService.updateSuspect(profile._id,dangerLevel);
//     }

//     const sensor = await sensorsService.getSensorById(data.sensor_id);
//     const detection = {
//       id: profile._id,
//       detectedLicense_plate: data.license_plate?data.license_plate:"No license plate detected",
//       xLocation: sensor.location_x,
//       yLocation: sensor.location_y,
//       time: new Date(),
//       place_name: sensor.place_name
//     };
//     await detectionService.createDetection(detection);
//     res.sendStatus(201);
//   } catch (err) {
//     res.status(500).send(`There was a problem - ${err.message}`);
//   }
// };

module.exports = {
    getAllDetections,
    getDetectionsById,
    addDetection,
    detectionFromBodel,
};
