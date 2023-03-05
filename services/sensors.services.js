const db = require("../models/db");
const sensors = db.sensors;

 const getSensorById = (id) => {
    try {
        return sensors.findOne({id : id});
    } catch (err) {
        console.log("There was a problem finding the sensor" + err.massage)
    }
 }