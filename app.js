const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const chatRoutes = require('./routes/chat');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', chatRoutes);

const connectToDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://satyam432:satej123satej@cluster0.imrmaov.mongodb.net/?retryWrites=true&w=majority`,
			{
				useUnifiedTopology: true,
				useCreateIndex: true,
				useNewUrlParser: true
			}
		);

		console.log('Connected to DB');
		app.listen(3000);
	} catch (err) {
		console.log(err);
	}
};

connectToDB();
