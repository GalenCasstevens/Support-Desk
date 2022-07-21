const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

const getTickets = asyncHandler(async (req, res) => {
	res.send('reading tickets...');
});

const createTicket = asyncHandler(async (req, res) => {
	res.send('creating ticket...');
});

module.exports = {
	getTickets,
	createTicket,
};
