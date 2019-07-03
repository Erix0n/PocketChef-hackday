const express = require('express');
const app = express();
const fs = require('fs');
const { promisify } = require('util');
const uuid = require('uuid/v4');
const bodyParser = require('body-parser');


const promiseReadFile = promisify(fs.readFile);
const promiseWriteFile = promisify(fs.writeFile);


function createShortuuid() {
    const [id] = uuid().split("-");
    return id;
}

async function readRecipe() {

    const data = await promiseReadFile('./db/addedRecipe.json', 'utf8');
    return JSON.parse(data);
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.get('/', async function (req, res) {
    const data = await promiseReadFile('./db/db.json', 'utf8');
    res.send(data);
});

app.get('/random', async function (req, res) {
    const data = await promiseReadFile('./db/db.json', 'utf8');
    const parsedData = JSON.parse(data);
    const randomItem = parsedData.meals[Math.floor(Math.random() * parsedData.meals.length)];
    res.send(randomItem);
});

app.post('/addrecipe', async function (req, res) {
    const id = createShortuuid();
    const data = req.body;
    data.id = id;

    try {
        const dataFromDB = await readRecipe();
        dataFromDB.testing.push(data);
        fs.writeFileSync('./db/addedRecipe.json', JSON.stringify(dataFromDB));
        res.send({ response: 'OK', data })
    } catch (e) {
        console.error(e);
        res.send({ error: '500' })
    }

})




app.listen(8000, () => console.log('App listening on port 8000'));