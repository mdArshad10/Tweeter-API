const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { port } = require('./constant.js');
const db = require('./config/db.js');

// express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
	cors({
		origin: ['*'],
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	})
);

app.get('/api/v1/test', (req, res, next) => {
	res.status(200).json({
		message: 'this is for testing',
	});
});

app.listen(port, async () => {
	console.log(`the server is running at port ${port}`);
	await db();
});
