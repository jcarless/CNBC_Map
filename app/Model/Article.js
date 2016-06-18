var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type:String,
        required:true,
        unique: true
    },
    link: {
        type:String,
        required:true,
        unique: true
    },
    text: {
        type:String,
        required: false,
        unique: false
    }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
