const mongoose = require('mongoose');
const { databaseName, mongoURL } = require('../constant.js');

const connectDB = async () => {
	try {
		const dbInstance = await mongoose.connect(
			`${mongoURL}/${databaseName}`
		);
		console.log(
			`the database connected at ${dbInstance.connection.port}`
		);
	} catch (error) {
		console.error(
			'Error connecting to the database:',
			error.message
		);
		process.exit(1); // Exit process with failure status 1 if connection fails.
	}
};

module.exports = connectDB;
