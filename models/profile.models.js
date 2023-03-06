

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

const { connection } = require('../server');
var Schema = mongoose.Schema;

var populationSchema = new Schema({
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
});

module.exports = connection.model('population', populationSchema)
