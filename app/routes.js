module.exports = function(app, database){
	
	// api --------------------------------------------------------------------
	
	// get entire portfolio
	app.get('/api/portfolio', function(req, res){
		res.json(database.data);
	});
	
	// application ------------------------------------------------------------
	app.get('*', function(req, res){
		res.sendfile('./public/index.html');
	});
};