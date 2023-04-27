const express = require("express");
const router = express.Router();

const detailsController = require("../controllers/details");

router.post("/flights/:id/details", detailsController.create);

module.exports = router;
