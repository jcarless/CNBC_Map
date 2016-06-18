var request = require('request');
var cheerio = require('cheerio');
var Article = require('../Model/Article.js');


module.exports = function(app) {


    app.get('/', function(req, res){
        request('http://www.cnbc.com/', function(error, response, html) {
            var $ = cheerio.load(html);
            $('h3.headline').each(function(i, element) {

                var result = {};


                result.title = $(this).children('a').text();
                linkRaw = $(this).children('a').attr('href');
                result.link = "www.cnbc.com" + linkRaw;

                console.log(result);


                var entry = new Article (result);

                entry.save(function(err, doc) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(doc);
                    }
                });

            }); //each
        }); //request
        res.redirect('/home');
    });


    app.get('/home', function(req, res){
        var headlines = [];
        Article.find({})
            .exec(function(err, article){
                for(var i = 0; i < article.length; i++){
                    headlines.push({title: article[i].title, id: article[i]._id});
                }
                res.json(headlines);
                console.log(headlines);
            });
    });



};