const mongoose = require('mongoose');

module.exports = mongoose =>{
const Profile = mongoose.model('Profile', mongoose.Schema({
    photo_url: String,
    first_name: String,
    last_name: String,
    address: String,
    date_of_birth: Date,
    city: String,
    wanted: Boolean,
    work_visa: Boolean,
    actions: [Int],  
    social_net_words: [String],
    license_plates:[String],
    sensors_activity:[[[Int]]]
    
})
);
return Profile;
};
