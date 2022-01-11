const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
});