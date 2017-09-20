const express = require('express');

const router = express.Router();

var data = require('../data.js')

/* INDEX TODOS */
router.get('/', function(req,res) {
   res.render('todos/index', {
     todos: data.seededTodos
   });
});

/* New Todos */
router.get('/new', (req, res) =>{
   res.render('todos/new');
});

/* Show todos */
router.get('/:id', (req, res) =>{
   const id = parseInt(req.params.id);
   const todo = data.seededTodos[id];

   if(!todo){
      res.render('todos/show', {
         error: true
      })
   }
   res.render('todos/show', {
      todo: todo
   })
})

router.post('/', (req, res) =>{
   const newTodo = req.body;
   data.seededTodos.push(newTodo);
   console.log('Successfully POSTed new Todo');
   res.redirect('/todos');
});
 
 module.exports = router;