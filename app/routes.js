module.exports = function(app, database){
	
	// api --------------------------------------------------------------------
	
	// get all portfolio sections
	app.get('/api/portfolio', function(req, res){
		res.json(database.data);
	});
	
	
	// application ------------------------------------------------------------
	app.get('/', function(req, res){
		res.sendfile('./public/index.html');
	});
	
	app.get('/:folder/:file', function(req, res){
		res.sendfile('./public/' + req.params.folder + '/' + req.params.file);
	});
};