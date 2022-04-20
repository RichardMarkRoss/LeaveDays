let exphbs  = require('express-handlebars');
let express = require('express');
let app = express();
const bodyParser = require('body-parser');



app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
//parse application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('main');
});

app.get('/', function (req, res) {
    res.render('LeaveDays');
});


let PORT = process.env.PORT || 8001;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});