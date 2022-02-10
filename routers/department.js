module.exports = function(app) { 
    const express = require('express');
    const router = express.Router();

    const department = require('../controllers/departmentController.js');

    app.get('/departments/:departmentId', department.getSubjects);
};