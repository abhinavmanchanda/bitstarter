var express = require('express');
var outfile = 'index.html';
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  var fileContents = fs.readFileSync(outfile).toString();
  response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});