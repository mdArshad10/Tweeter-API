const { Schema, model } = require('mongoose');

const tweetSchema = new Schema(
	{
		content: {
			type: String,
			required: true,
			max: [250, 'Tweet not more than 250 char'],
		},
		hashtags: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Hashtag',
			},
		],
	},
	{ timestamps: true }
);

const Tweet = model('Tweet', tweetSchema);

module.exports = Tweet;
