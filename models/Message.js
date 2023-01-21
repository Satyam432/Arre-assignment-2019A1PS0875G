const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		text: {
			type: String,
			required: true
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		groupId: {
			type: Schema.Types.ObjectId,
			ref: 'Group',
			required: true
		}
	},
	{ timestamps: true } //This will add createdAt and updatedAt fields to the document
);

module.exports = mongoose.model('Message', messageSchema);
