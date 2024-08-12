const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { port } = require('./constant.js');
const db = require('./config/db.js');
const apiRoutes = require('./routes');
const { StatusCodes } = require('http-status-codes');

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

app.use('/api', apiRoutes);
app.use('*', (req, res, next) => {
	return res.status(StatusCodes.ACCEPTED).json({
		success: true,
		message: 'Page not found',
		data: null,
		error: null,
	});
});

app.listen(port, async () => {
	console.log(`the server is running at port ${port}`);
	await db();
});
