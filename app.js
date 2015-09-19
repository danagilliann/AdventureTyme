var express = require('express');
var mysql = require('mysql');
var app = express();
var con = mysql.createConnection({ 
	// change host name to adventureTyme.co later
	host: 'localhost',
	user: 'Admin',
	password: 'secret',
});

con.connect(function(err) { 
	if (err) { 
		console.log('Error connect to DB');
	}
	console.log('Connection established');
});

con.end(function(err) { 
	// The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
