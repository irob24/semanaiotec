//  app/models/device.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
	code : String,
	name : String,
	description : String
});

module.exports = mongoose.model('Device', DeviceSchema);
