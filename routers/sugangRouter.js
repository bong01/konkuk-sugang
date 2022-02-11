module.exports = function (app) {
    const express = require('express');
    const router = express.Router();

    const sugang = require('../controllers/sugangController.js');

    app.get('/subjects', sugang.getSubjects);
    app.get('/subjects/:subjectId', sugang.getSubject);
    app.post('/subjects', sugang.getMySubjectList);
};