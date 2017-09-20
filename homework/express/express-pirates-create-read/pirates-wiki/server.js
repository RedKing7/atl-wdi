const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

const port = 3000;

/*app.get('/pirates', (req, res)=>{
   res.render('pirates', {

   });
});*/

app.listen(port, ()=>{
   console.log("==========================")
   console.log('LISTENING ON PORT ' + port);
   console.log("==========================")
})