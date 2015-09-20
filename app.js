var express = require('express'),
		app = express(),
		path = require('path'),
		bodyParser = require('body-parser'), 
		sqlite3 = require('sqlite3').verbose(),
		db = new sqlite3.Database('user.db'),
		check;	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/create', function(req, res) { 
	res.sendFile(path.join(__dirname + '/views/create.html'));
});

app.post('/create', function(req, res) { 
	username = req.body.username; 
	password = req.body.password; 

	db.serialize(function() {
	
	  var stmt = db.prepare("INSERT INTO user VALUES(?,?)");
		stmt.run(username, password);
		
		stmt.finalize();
	
	  db.each("SELECT * FROM user", function(err, row) {
	      console.log(row);
	  });
	});
	
	db.close();	
	res.sendStatus(200);	
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
