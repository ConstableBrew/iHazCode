// Server app configuration ===================================================
module.exports = function(app, express){
	app.use(express.static(__dirname + '/public'));	// Set static file location
	app.use(express.logger('dev'));					// Log every request to the console
	app.use(express.bodyParser());					// Pull information from html in POST
	app.use(express.methodOverride());				// Simulate DELETE and PUT
};