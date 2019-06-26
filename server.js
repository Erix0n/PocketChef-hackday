const express = require('express');
const app = express();
const fs = require('fs');
const { promisify } = require('util');

const promiseReadFile = promisify(fs.readFile);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', async function (req, res) {
    const data = await promiseReadFile('./db/db.json', 'utf8');
    res.send(data);
});




app.listen(8000, () => console.log('App listening on port 8000'));