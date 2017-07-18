var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));


//Main '/' Route. This will return the home page
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});