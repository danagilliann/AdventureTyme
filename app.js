var express = require('express'),
		app = express(),
		path = require('path'), 
		sqlite3 = require('sqlite3').verbose(),
		db = new sqlite3.Database('user.db');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/create', function(req, res) { 
	res.sendFile(path.join(__dirname + '/views/create.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
