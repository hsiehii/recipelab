const lists = require('./recipeData');
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
  let doc = fs.readFileSync('./purrfectMatch.html', "utf8");
  res.send(doc);
});

app.use('/js', express.static('./recipaData'))
app.use('/css', express.static('./purrfect'))

app.get('/agax-GET', function (req, res) {

  res.setHeader('Content-Type', 'application/json');
  let
})