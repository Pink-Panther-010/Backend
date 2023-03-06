const mongoose = require('mongoose');

module.exports = mongoose =>{
const suspects = mongoose.model('suspects', mongoose.Schema({
    danger_level: { type: Number, max: 3 },
})
);
return suspects;
};