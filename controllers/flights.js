const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

function newFlight(req, res) {
	res.render("flights/new", {
		title: "Enter a New Flight",
	});
}

async function create(req, res) {
	console.log(req.body)
	try {
		await Flight.create(req.body).then(function (newFlight) {
			res.redirect("/flights");
		});
	} catch (error) {
		console.log(error);
		res.render("flights/new", { errorMsg: error.message });
	}
}

async function index(req, res) {
    try {
        const allFlights = await Flight.find({});
        res.render("flights/index", {
            flights: allFlights,
            title: "All Flights",
        });
    } catch (error) {
        console.log(error);
        res.render("error", { title: "Something Went Wrong" });
    }
}

async function show(req, res) {
	try {
		const flight = await Flight.findById(req.params.id);
		const tickets = await Ticket.find({ flight: flight._id });
        
		res.render("flights/show", {
			flight: flight,
			title: "See Flight Details",
			tickets,
		});
	} catch (error) {
		console.log(error);
		res.render("error", { title: "Something Went Wrong" });
	}
}

module.exports = {
	new: newFlight,
	create,
	index,
	show,
};