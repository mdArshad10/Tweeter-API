const { TweetServices } = require('../services/index');
const { StatusCodes } = require('http-status-codes');

const tweetService = new TweetService();

const createTweet = async (req, res, next) => {
	try {
		const response = await tweetService.createTweet(req.body);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: 'successfully created a new tweet',
			data: response,
			err: null,
		});
	} catch (error) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: 'something went wrong',
			data: null,
			err: error,
		});
	}
};

module.exports = {
	createTweet,
};
