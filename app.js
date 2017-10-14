var express = require("express");
var morgan = require('morgan');
var app = express();

var port = process.env.PORT || 9999;

app.listen(port);

console.log("Listening on port " + port);

app.use(morgan('dev'));

app.use('/', express.static('public'));

app.get('/test', function(req, res) {
  res.render('src/client/app/testArea.js');
});
