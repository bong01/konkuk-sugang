const express = require('express');
const departmentRouter = require('./routers/department.js');

const app = express();

// app.use('/departments',departmentRouter)
require('./routers/department.js')(app);
const port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});