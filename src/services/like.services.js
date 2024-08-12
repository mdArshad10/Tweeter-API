const { LikeRepository, TweetRepository } = require('../repository');

class LikeServices {
	constructor() {
		this.LikeRepository = new LikeRepository();
		this.TweetRepository = new TweetRepository();
	}

	// /api/v1/likes/toggle?id=modelid&type=Tweet
	async toggleLike(modelId, modelType, userId) {
		if (modelType === 'Tweet') {
			var likeable = await this.TweetRepository.get(modelId);
		} else if (modelType === 'Comment') {
            
		} else {
			throw new Error('unknown model type');
		}
	}
}

module.exports = LikeServices;
