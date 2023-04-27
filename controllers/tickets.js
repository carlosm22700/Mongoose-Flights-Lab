const Ticket = require("../models/ticket");

function newTicket(req, res) {
	res.render("tickets/new", {
		title: "Enter a New Ticket",
		flightId: req.params.id,
	});
}

async function create(req, res) {
	try {
		let flightId = req.params.id;
		let ticket = new Ticket(req.body);
		ticket.flight = flightId;
		await ticket.save();
		res.redirect(`/flights/${flightId}`);
	} catch (error) {
		console.log(error);
		res.send("error");
	}
}

module.exports = {
	new: newTicket,
	create,
};
