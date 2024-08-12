const { Hashtag } = require('../models/index.js');

class HashtagRepository {
	async create(data) {
		try {
			const response = await Hashtag.create(data);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async bulkCreate(data) {
		try {
			const response = await Hashtag.insertMany(data);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async get(id) {
		try {
			const response = await Hashtag.findById(id);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async getWithComment(id) {
		try {
			const response = await Tweet.findById(id);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async destroy(id) {
		try {
			const response = await Hashtag.findByIdAndDelete(id);
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}

	async findByName(titleList) {
		try {
			const response = await Hashtag.find({ title: titleList }).select("title -_id");
			return response;
		} catch (error) {
			console.log('some error on repository level');
			throw error;
		}
	}
}

module.exports = TweetRepository;
