class CrudRepository {
	constructor(model) {
		this.model = model;
	}

	async create(data) {
		try {
			const result = await this.model.create(data);
		} catch (error) {
			console.log('something went wrong in crud repository');
			throw error;
		}
	}

	async destroy(data) {
		try {
			const result = await this.model.findByIdAndDelete(data);
			return result;
		} catch (error) {
			console.log('something went wrong in crud repository');
			throw error;
		}
	}

	async get(id) {
		try {
			const result = await this.model.findById(id);
			return result;
		} catch (error) {
			console.log('something went wrong in crud repository');
			throw error;
		}
	}

	async getAll(id) {
		try {
			const result = await this.model.find({});
			return result;
		} catch (error) {
			console.log('something went wrong in crud repository');
			throw error;
		}
	}

	async update(id, data) {
		try {
			const result = await this.model.findByIdAndUpdate(
				id,
				data,
				{ new: true }
			);
			return result;
		} catch (error) {
			console.log('something went wrong in crud repository');
			throw error;
		}
	}
}

module.exports = CrudRepository;
