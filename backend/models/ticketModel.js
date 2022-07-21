const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		product: {
			type: String,
			required: [true, 'Please select a product'],
			enum: [
				'Razer Blade 15',
				'Asus ROG Zephyrus G14',
				'Lenovo Legion 5 Pro',
				'MSI GS66 Stealth',
				'Acer Nitro 5',
			],
		},
		description: {
			type: String,
			required: [true, 'Please enter a description of the issue'],
		},
		status: {
			type: String,
			required: true,
			enum: ['new', 'open', 'closed'],
			default: 'new',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Ticket', ticketSchema);
