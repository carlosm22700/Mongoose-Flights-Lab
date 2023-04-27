//Dependencies
const express = require('express');
const logger = require('morgan')
const indexRoutes = require('./routes/index');
const flightRoutes = require('./routes/flights');
const detailsRoutes = require('./routes/details');
const ticketRoutes = require('./routes/tickets')



//Initialize express app
const app = express();

//environment variables
require('dotenv').config();
require('./config/database');

//Configure app settings
app.set('view engine', 'ejs');

//middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//Mount routes
app.use('/', indexRoutes);
app.use('/flights', flightRoutes);
app.use('/', detailsRoutes);
app.use('/', ticketRoutes);

app.listen(3000, () => {
    console.log('express is listening on port:3000');
});
