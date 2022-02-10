const departmentService = require('../services/departmentService.js');

exports.getSubjects = async function (req, res) {
    console.time('performance');
    const departmentId = req.params.departmentId; 
    const result = await departmentService.getSubjects(departmentId);
    console.log(result);
    return res.send(result);
};