var express = require('express');
var app     = express();

app.use(express.static('app'));

var server = app.listen(8080, function(){
  var host = 'localhost';
  var port = server.address().port;

  console.log('contact app listening at http://%s:%s', host, port);
});