const { config } = require('dotenv');

config({
	path:
		process.env.NODE_ENV === 'production'
			? '.env.production'
			: '.env',
});

const port = process.env.NODE_ENV;
const mongoURL = process.env.MONGO_URL;
const databaseName = 'twitter';

module.exports = {
	port,
	mongoURL,
	databaseName,
};
