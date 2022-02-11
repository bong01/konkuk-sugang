const sugangService = require('../services/sugangService.js');

exports.getSubjects = async function (req, res) {
    let departmentId = req.query.departmentId;
    let type = req.query.type;
    let grade = req.query.grade;
    if (!departmentId) {
        departmentId = "";
    }
    if (!type) {
        type = "";
    }
    if (!grade) {
        grade = ["1", "2", "3", "4", "9"];
    }
    const result = await sugangService.getSubjects(departmentId, type, grade);
    return res.send(JSON.stringify(result));
};

exports.getSubject = async function (req, res) {
    const subjectId = req.params.subjectId;
    const result = await sugangService.getSubject(subjectId);
    return res.send(JSON.stringify(result));
};

exports.getMySubjectList = async function (req, res) {
    console.log(req.body.sbj_num);
    const mySubjectList = req.body.sbj_num;
    const result = await sugangService.getMySubjectList(mySubjectList);
    return res.send(JSON.stringify(result));
}