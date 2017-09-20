/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser = require('body-parser');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

const todosController = require('./controllers/todos');

app.use(express.static(__dirname + '/public'));

// log
app.use( logger('dev'));

//body parser
app.use(bodyParser.urlencoded({
  extended: true
}))

/*Views*/
app.set('view engine', 'hbs');

/*Controllers*/
app.use('/todos', todosController);

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
