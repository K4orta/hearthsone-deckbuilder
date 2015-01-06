var express = require('express');
var react = require('react');

var app = express();
app.set('views', './public/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index', {});
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var server = app.listen(3000, function() {
	console.log("Started on port " + port);
});