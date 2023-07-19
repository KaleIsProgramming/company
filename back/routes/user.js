const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//Company2

router.get('/company2', userController.getCompany2);

//Experts

router.get('/experts', userController.getAllExperts);

//Articles

router.get('/articles', userController.getArticles);

router.get('/article', userController.getArticleById);

//Courses

router.get('/course', userController.getCourse);

router.get('/courses', userController.getAllCourses);

//Registrationes

router.post('/create-registration', userController.addRegistration);

//Companies

router.get('/company', userController.getCompany);

router.get('/companies', userController.getAllCompanies);

// Users

router.get('/user', userController.getUser);

router.get('/users', userController.getAllUsers);

// Services 

router.get('/services', userController.getServices);


module.exports = router;