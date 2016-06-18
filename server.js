var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

//Database configuration
mongoose.connect('mongodb://admin:admin@ds057954.mlab.com:57954/businessnewsscrapperdb');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});
db.once('open', function () {
    console.log('Mongoose connection successful.');
});

app.set('views', __dirname + '/app/views');

// load the static files
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

//routing
require("./app/Routes/routes.js")(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('App running on port 3000!');
});
