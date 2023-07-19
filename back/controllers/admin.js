const Article = require('../models/article');
const Course = require('../models/course');
const Registrationes = require('../models/registration');

exports.addArticles = (req, res, next) => {
    const article = new Article("Najładniejsze koty świata", "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla", "", "")
    article.addArticles();
} 

exports.removeArticle = (req, res, next) => {
    Article.removeArticle(1);
} 