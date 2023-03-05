const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = new Schema({
    id: Schema.Types.ObjectId,
    photo_url: String,
    first_name: String,
    last_name: String,
    address: String,
    date_of_birth: Date,
    city: String,
    wanted: Boolean,
    work_visa: Boolean,
    actions: Array,
    
  employeename: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
}, {
  timestamps: true,
});
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;