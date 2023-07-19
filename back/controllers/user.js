const Course = require('../models/course');
const Company = require('../models/company');
const User = require('../models/user');
const Registrationes = require('../models/registration');
const Article = require('../models/article');
const Company2 = require('../models/company2');
const Experts = require('../models/experts');
const Service = require('../models/service');


// Company2

exports.getCompany2 = (req, res, next) => {
    Company2.getCompany()
    .then(data => {
        res.status(202).json({
            data
        })
    })
    .catch(err => console.log(err));
}

// Experts

exports.getAllExperts = (req, res, next) => {
    Experts.getExperts()
    .then(data => {
        res.status(202).json({
            data
        })
    })
    .catch(err => console.log(err));
}

// Articles

exports.getArticles = (req, res, next) => {
    Article.fetchAllArticles()
    .then(data => {
        res.status(202).json({
            data
        })
    })
    .catch(err => console.log(err));
}

exports.getArticleById = (req, res, next) => {
    Article.fetchArticleById(1)
    .then(data => {
        res.status(202).json({
            data
        })
    })
    .catch(err => console.log(err));
}

// Courses
exports.getAllCourses = (req, res, next) => {
    Course.fetchAllCourses()
    .then(data => {
        res.status(200).json({
            id: data[0]
        });
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getCourse = (req, res, next) => {
    Course.fetchCourseById(1)
    .then(data => {
        res.status(200).json({
            id: data
        });
    })
    .catch(err => {
        console.log(err);
    });
}

// Registrationes

exports.addRegistration = (req, res, next) => {
    const registration = new Registrationes(
        req.body.course,
        req.body.name ,
        req.body.surname ,
        req.body.graduate ,
        req.body.company_name ,
        req.body.nip ,
        req.body.street ,
        req.body.post_code ,
        req.body.city ,
        req.body.company_phone ,
        req.body.user_phone ,
        req.body.user_mail ,
        req.body.participant_mail ,
        req.body.website ,
        req.body.other ,
        req.body.accomodation ,
        req.body.discount ,
        req.body.other_discount ,
        req.body.r1 ,
        req.body.r2 ,
        req.body.r3 ,
        req.body.r4 ,
        );
    console.log(registration)

    registration.postRegistrationes();

}

// Comapnies

exports.getAllCompanies = (req, res, next) => {
    Company.fetchAllCompanies()
    .then(data => {
        res.status(200).json({
            id: data[0]
        });
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getCompany = (req, res, next) => {
    Company.fetchCompanyById(1)
    .then(data => {
        res.status(200).json({
            id: data
        });
    })
    .catch(err => {
        console.log(err);
    });
}

// User

exports.getAllUsers = (req, res, next) => {
    User.fetchAllUsers()
    .then(data => {
        res.status(200).json({
            id: data[0]
        });
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getUser = (req, res, next) => {
    User.fetchUserById(1)
    .then(data => {
        res.status(200).json({
            id: data
        });
    })
    .catch(err => {
        console.log(err);
    });
}

// Services 

exports.getServices = (req, res, next) => {
    Service.getAllServices()
    .then(data => {
        res.status(202).json({
            data
        })
    })
    .catch(err => console.log(err));
}