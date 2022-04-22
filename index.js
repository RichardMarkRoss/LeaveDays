/* eslint-disable no-undef */
let exphbs  = require('express-handlebars');
let express = require('express');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');



app.engine('.handlebars', 
exphbs.engine({ extname: '.handlebars', 
defaultLayout: "main"}));
app.set('views', path.join(__dirname))
app.set('view engine', 'hbs');
//parse application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));      

app.get('/', function (req, res) {
  res.render('main');
});

let PORT = process.env.PORT || 4001;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});