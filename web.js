var express = require("express");
var app = express();
app.use(express.logger());


app.get('/', function(request, response) {
	response.write(__dirname);
	//response.sendfile('viewModels/Portfolio.html', {root: './public'});
});

app.get('/:path/:file', function(request, response){
  var path = request.params.path,
	file = request.params.file;
  
	response.sendfile(path + '/' + file, {root: './public'});
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});