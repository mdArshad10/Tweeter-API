const { Schema, model } = require('mongoose');

const hashTagSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		}, 
	},
	{ timestamps: true }
);

hashTagSchema.pre('save', function (next) {
	this.title.toLowerCase();
	next();
});

const HashTag = model('Hashtag', hashTagSchema);

module.exports = HashTag;
