var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', './views')

var port = 3000;

app.get('/', (req, res)=>{
   res.render('index')
})

app.get('/topping/:type', (req, res)=>{
   res.render('toppings', {
      type: req.params.type
   })
})

app.get('/order/:amount/:size', (req, res)=>{
   res.render('order', {
      amount: req.params.amount,
      size: req.params.size
   });
})

app.listen(port, ()=>{
   console.log("==========================")
   console.log('LISTENING ON PORT ' + port);
   console.log("==========================")
})