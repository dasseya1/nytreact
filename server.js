var express = require('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var uri = require ('./mongoCredentials');
var Article = require ('./models/Article') ;
var app = express();

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

app.get("/api/saved", function(req, res) {

var query = Article.find({});
    query.exec(function(err, articles) {
    if (err) {
      console.log(err);
    }
      res.json(articles);
  });
});

app.post("/api", function(req, res) {

    var art = new Article({
        title: req.body.title,
        url: req.body.url
    });

    art.save(function(err, art) {
        // If there's an error during this query
        if (err) {
            // Log the error
            return console.log(err);
        }
        // Otherwise,
        else {
            //log results
      res.end();
        }
    });

});


// removes saved articles from db
app.delete('/api/saved/:id', function(req, res){
	Article.findOneAndRemove({"_id": req.params.id},function(err, article) {

		if (err) {
			console.log(err);
		}
		    res.end();
		})
	})


//Main '/' Route. This will return the home page
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});