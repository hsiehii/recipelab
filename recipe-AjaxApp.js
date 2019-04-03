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

app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let port = 8888;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
})
