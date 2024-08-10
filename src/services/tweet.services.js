const { TweetServices } = require('../repository/index');

class TweetServices {
	constructor() {
		this.tweetServices = new TweetServices();
	}

	async createTweet(data) {
		try {
			const content = data.content;
			let tags = content.match(
				/([#＃]+)([0-9A-Z_]*[A-Z_]+[a-z0-9_üÀ-ÖØ-öø-ÿ]*)/gi
			);
			console.log(tags);
			tags = tags.map((tag)=> tag.substring(1)); 
			const tweet = await this.tweetServices.create(data);
			//TODO: create a hashtags 
			// 1. check the tweet is existing or not
			/**
			 * i. bulcreate in mongoose
			 * ii. filter title of hashtag based on multiple tags
			 * iii. How to add the tweet id inside all the hashtags 
			 * */
			
			// 2. create new hashtags if not exist and add tweet_id to hashtags table return tweet;

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
