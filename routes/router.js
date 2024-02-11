const routes = require('express').Router();

routes.use('/devices', require('./devices.routes'));




module.exports = routes;