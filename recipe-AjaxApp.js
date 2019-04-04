const lists = require('./core/recipeData');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
  let doc = fs.readFileSync('./static/html/purrfectMatch.html', "utf8");
  res.send(doc);
});

app.use('/js', express.static('static/js'))
app.use('/css', express.static('static/css'))

app.get('/lists', function (req, res) {
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'korea-list') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getSDB();
        res.send(dataList);

    } else if(formatOfResponse == 'italy-list') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getCarbonara();
        res.send(dataList);
    } else if (formatOfResponse == 'taiwan-list') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getBeef();
        res.send(dataList);
    } else if(formatOfResponse == 'japan-list') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getSushi();
        res.send(dataList);
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let port = 8888;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
})
