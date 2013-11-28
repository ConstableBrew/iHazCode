// set up =====================================================================
var express  = require('express');
var app      = express();
//var mongodb  = require('mongodb').MongoClient;


// configuration ==============================================================
var database	= require('./app/config/database.js');
var port 		= process.env.PORT || 5000;

require('./app/config/server.js')(app, express);


// listen =====================================================================
require('./app/routes.js')(app, database);
app.listen(port, function() {
  console.log("Listening on " + port);
});
