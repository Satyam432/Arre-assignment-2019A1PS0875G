const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const groupSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	},
	{ timestamps: true } //This will add createdAt and updatedAt fields to the document
);

module.exports = mongoose.model('Group', groupSchema);
