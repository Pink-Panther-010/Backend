var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var suspectSchema = new Schema({
    danger_level: { type: Number, max: 3 },
});

module.exports = mongoose.model('List', suspectSchema)
