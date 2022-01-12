require('dotenv').config();

const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
});