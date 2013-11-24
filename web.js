var express = require("express");
var app = express();
var publicPath = __dirname + '\\public\\'
app.use(express.logger());


app.get('/', function(request, response) {
  response.sendfile(publicPath + 'viewModels/Portfolio.html');
});

app.get('/:path/:file', function(request, response){
  var path = request.params.path,
	file = request.params.file;
    
  response.sendfile(publicPath + path + '\\' + file);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});