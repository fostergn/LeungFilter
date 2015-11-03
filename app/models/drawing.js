var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrawingSchema = new Schema({
	name: String,
	description: String,
	category: String,
	tags: [String],
	url: String,
	full_image: {
		name: String,
		description: String,
		url: String
	}
});

module.exports = mongoose.model('Drawing', DrawingSchema);