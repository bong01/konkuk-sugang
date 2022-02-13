const sugangService = require('../services/sugangService.js');
const {logger} = require("../config/winston");

exports.getSubjects = async function (req, res) {
    logger.info('GET: /subjects, QUERY: ' +  JSON.stringify(req.query));
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
    try{
    const result = await sugangService.getSubjects(departmentId, type, grade);
    return res.status(200).send(JSON.stringify(result));
    } catch(e) {
        return res.status(404).send();
    }
};

exports.getSubject = async function (req, res) {
    logger.info('GET: /subject/, Params: ' +  req.params.subjectId);
    const subjectId = req.params.subjectId;
    try{
    const result = await sugangService.getSubject(subjectId);
    return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        return res.status(404).send();
    }
};

exports.getMySubjectList = async function (req, res) {
    logger.info('POST: /subjects, : ' +  JSON.stringify(req.body));
    const mySubjectList = req.body.sbj_num;
    try {
    const result = await sugangService.getMySubjectList(mySubjectList);
    return res.status(200).send(JSON.stringify(result));
    } catch(e){
        return res.status(404).send();
    }
}