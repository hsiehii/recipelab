const lists = require('./core/recipeData');
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
  let doc = fs.readFileSync('./static/html/purrfectMatch.html', "utf8");
  res.send(doc);
});

app.use('/js', express.static('static/js'))
app.use('/css', express.static('static/css'))

app.get('/agax-GET', function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  let d = new Date();
  res.send({ meg: d});
})

app.get('/ajax-GET-list',)
