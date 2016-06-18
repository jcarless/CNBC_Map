var request = require('request');
var cheerio = require('cheerio');
var Article = require('../Model/Article.js');


module.exports = function(app) {


    app.get('/', function(req, res){
        console.log('at: ' + '/');
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
                // res.json(headlines);
                res.send('index.html');
                console.log(headlines);
            });
    });


    app.get('/:id', function(req, res){
        Article.findOne({
            _id: req.params.id
        })
            .exec(function(err, article) {
                if(err) {
                    console.log(err);
                    //res.send('error occured')
                    return callback(err);
                } else {
                    var url = article.link;
                    console.log('url: ' + url);
                    request("http://www.cnbc.com/2016/05/30/feds-bullard-says-global-markets-seem-well-prepared-for-summer-rate-hike.html", function(error, response, html){
                        if(error) {
                            console.log(error);
                            //res.send('error occured')
                            return callback(error);
                        } else {
                            var $ = cheerio.load(html);
                            var data = {articleText:''};
                            data.article = article;
                            $('div.group').each(function(i, element){
                                articleText = $(this).children('p').text();
                                data.articleText += articleText;
                            });

                            res.json(data);
                        }
                    }); //request
                } //if/then/else
            }); //exec
    });


};