const express = require('express');
const sugangRouter = require('./routers/sugangRouter.js');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sugangRouter(app);

const port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});