// require mongoose
const mongoose = require('mongoose');
// set up the schema for our model
const Schema = mongoose.Schema;

//set up the model for our collection in the db
const flightSchema = new Schema(
	{
		airline: {
			type: String,
			required: true,
			enum: ["American", "Southwest", "United"],
		},
		airport: {
			type: String,
			default: "DEN",
			enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
		},
		flightNo: { 
            type: Number, 
            min: 1, 
            max: 9999 
        },
		departs: {
			type: Date,
			default: () => {
				return new Date().getFullYear() + 1;
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Flight', flightSchema)

// the two arguments for mongoose.model
// 1) the model name - also used to create the collection name in the database
// 2) a reference to the schema used to create the model