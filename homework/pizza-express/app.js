var express = require('express');

var app = express();

var port = 3000;

app.get('/', (req, res)=>{
   res.send('Welcome to Pizza Express!');
})

app.get('/topping/:type', (req, res)=>{
   res.send(`${req.params.type} pizza! Good choice.`);
})

app.get('/order/:amount/:size', (req, res)=>{
   res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute! Cuz' we're stupid fast!`);
})

app.listen(port, ()=>{
   console.log("==========================")
   console.log('LISTENING ON PORT ' + port);
   console.log("==========================")
})