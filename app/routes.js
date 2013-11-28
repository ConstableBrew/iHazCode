module.exports = function(app){
	
	// api --------------------------------------------------------------------
	
	// get entire portfolio
	app.get('/api/portfolio', function(req, res){
		res.json(Portfolio);
	});
	
	// application ------------------------------------------------------------
	app.get('*', function(req, res){
		res.sendfile('./public/index.html');
	});
};