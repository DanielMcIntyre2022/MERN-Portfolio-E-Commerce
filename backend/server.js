require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const db = require('./config/db');

db();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(port, console.log(`listening on port: ${port}`));