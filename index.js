/* eslint-disable no-undef */
const exphbs  = require('express-handlebars');
const express = require('express');
// eslint-disable-next-line no-unused-vars
const path = require('path');
// eslint-disable-next-line no-unused-vars
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');

app.engine('handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));  

app.get('/', function (req, res) {
  res.render('LeaveReq');
});

app.get('/all', function (req, res) {
  res.render('LeaveList');
});

app.get('/home', function (req, res) {
  res.render('login');
});


let PORT = process.env.PORT || 4001;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});