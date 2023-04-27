const express = require("express");
const router = express.Router();

const flightsController = require("../controllers/flights.js");

router.get("/", flightsController.index);

// GET /flights/new
router.get("/new", flightsController.new);

// POST /flights
router.post("/", flightsController.create);


//show route must always go last
router.get("/:id", flightsController.show);

module.exports = router;