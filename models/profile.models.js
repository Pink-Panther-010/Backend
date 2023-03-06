

// module.exports = mongoose =>{
// const Profile = mongoose.model('population', mongoose.Schema({
//     photo_url: String,
//     first_name: String,
//     last_name: String,
//     address: String,
//     date_of_birth: Date,
//     city: String,
//     wanted: Boolean,
//     work_visa: Boolean,
//     actions: [Int],  
//     social_net_words: [String],
//     license_plates:[String],
//     sensors_activity:[[[Int]]]
    
// })
// );
// return Profile;
// };
const mongoose = require('mongoose')
const db = require('../models/db.models')
var Schema = mongoose.Schema;

 const connection =  mongoose.createConnection(db.url);

var populationSchema = new Schema({
    _id: String,
    photo_url: String,
    first_name: String,
    last_name: String,
    address: String,
    date_of_birth: Date,
    city: String,
    wanted: Boolean,
    work_visa: Boolean,
    actions: [Number],  
    social_net_words: [String],
    license_plates:[String],
    sensors_activity:[[[Number]]]
},{collection: 'population'});

module.exports =  connection.model('population', populationSchema)
