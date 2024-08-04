const { Schema, model } = require('mongoose');

const hashTagSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		tweets: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Tweet',
			},
		],
	},
	{ timestamps: true }
);

const HashTag = model('Hashtag', hashTagSchema);

module.exports = HashTag;
