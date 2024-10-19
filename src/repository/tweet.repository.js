const { Tweet } = require('../models/index.js');
const CrudRepository = require('./crud-repository.js');

class TweetRepository extends CrudRepository {
	constructor() {
		super(Tweet);
	}
	async create(data) {
		try {
			const response = await Tweet.create(data);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async get(id) {
		try {
			const response = await Tweet.findById(id);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async getAll(offset, limit) {
		try {
			const response = await Tweet.find()
				.skip(offset)
				.limit(limit);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}
}

module.exports = TweetRepository;
