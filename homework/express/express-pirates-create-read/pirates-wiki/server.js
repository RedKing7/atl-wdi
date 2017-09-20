const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const piratesController = require('./controllers/pirates_controller');

const port = 3000;

app.use('/pirates', piratesController);
app.get('/', (req, res)=>{
   res.redirect('/pirates');
});

app.listen(port, ()=>{
   console.log("==========================")
   console.log('LISTENING ON PORT ' + port);
   console.log("==========================")
})