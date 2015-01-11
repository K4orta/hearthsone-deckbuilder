var express = require('express');
require("node-jsx").install(); 
var React = require('react'),
	Router = require('react-router'),
	Routes = require('./public/js/components/routes.react'),
	AppRouter = require('./public/js/components/router.react');

var app = express();
app.set('views', './public/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	Router.run(Routes, req.url, function(Handler) {
		var reactHtml = React.renderToString(React.createElement(Handler, null));
		res.render('index', {reactOutput: reactHtml});
	});
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
	console.log("Started on port " + port);
});