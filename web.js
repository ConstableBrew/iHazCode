var express = require('express');
var app = express();

var ONE_DAY = 0;//86400000;

app.use(express.static(__dirname + '/public', { maxAge: ONE_DAY }));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});