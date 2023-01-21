const Message = require('../models/Message');

exports.getMessagesPaginated = async (req, res, next) => {
	try {
		const { groupId } = req.params;
		const { limit = 5, start = 0 } = req.query;


		// Skip is the number of documents to skip
		// Limit is the number of documents to return
		const messages = await Message.find({ groupId })
			.select('text userId createdAt')
			.sort({ createdAt: -1 })
			.skip(parseInt(start))
			.limit(parseInt(limit));

		return res.status(200).json({
			status: 'Messages fetched successfully',
			messages
		});
	} catch (err) {
		return res.status(500).json({
			status: 'Error fetching messages',
			error: err.message
		});
	}
};

exports.createMessage = async (req, res, next) => {
	try {
		const { groupId } = req.params;
		const { text, userId } = req.body;

		const message = await Message.create({
			text,
			userId,
			groupId
		});

		return res.status(201).json({
			status: 'Message created successfully',
		});
	} catch (err) {
		return res.status(500).json({
			status: 'Error creating message',
			error: err.message
		});
	}
};
