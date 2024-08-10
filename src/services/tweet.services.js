const { TweetServices } = require('../repository/index');

class TweetServices {
	constructor() {
		this.tweetServices = new TweetServices();
	}

	async createTweet(data) {
		try {
			const tweet = await this.tweetServices.create(data);
			return tweet;
		} catch (error) {
			console.log('some thing wrong in services layer');
			throw error;
		}
	}

	async getTweet(id) {
		try {
			const tweet = await this.tweetServices.getTweet(id);
			return tweet;
		} catch (error) {
			console.log('some thing wrong in services layer');
			throw error;
		}
	}

	async getTweetWithComment(id) {
		try {
			const tweet = await this.tweetServices.getTweetWithComment(
				id
			);
			return tweet;
		} catch (error) {
			console.log('some thing wrong in services layer');
			throw error;
		}
	}

	async deleteTweet(id) {
		try {
			const tweet = await this.tweetServices.destroy(id);
			return tweet;
		} catch (error) {
			console.log('some thing wrong in services layer');
			throw error;
		}
	}

	async getAllTweets(offset, limit) {
		try {
			const tweets = await this.tweetServices.getAll(
				offset,
				limit
			);
			return tweets;
		} catch (error) {
			console.log('some thing wrong in services layer');
			throw error;
		}
	}
}

module.exports = TweetServices;
