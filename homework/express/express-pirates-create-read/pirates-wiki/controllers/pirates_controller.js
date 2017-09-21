const express = require('express');
const router = express.Router();
const pirateList = require('../models/pirates');

//index
router.get('/', (req, res) =>{
   res.render('pirates/index', {
      pirates: pirateList
   });
})

//new
router.get('/new', (req, res) =>{
   res.render('pirates/new');
})

//show
router.get('/:id', (req, res) =>{
   const id = parseInt(req.params.id);
   const pirate = pirateList[id];

   res.render('pirates/show', {
      pirate: pirate,
      id: id
   })
})

//create
router.post('/', (req, res) =>{
   const newPirate = req.body;
   pirateList.push(newPirate);
   console.log('Successfully posted new Pirate');
   res.redirect('/pirates');
})

//delete
router.delete('/:id', (req, res)=>{
   pirateList.splice(req.params.id, 1);//remove item from array
   console.log('successful delete');   
   res.redirect('/');
})

//edit
router.get('/:id/edit', (req, res)=>{
   const id = parseInt(req.params.id);
   const pirateToEdit = pirateList[id];
   res.render('pirates/edit', {
      pirate: {
         name: pirateToEdit.name,
         birthplace: pirateToEdit.birthplace,
         death_year: pirateToEdit.death_year,
         base: pirateToEdit.base,
         nickname: pirateToEdit.nickname
      },
      id: id
   })
})

//put
router.put('/:id', (req, res) =>{
   const id = parseInt(req.params.id);   
   const pirateToEdit = pirateList[id];
   pirateToEdit.name = req.body.name;
   pirateToEdit.birthplace = req.body.birthplace;
   pirateToEdit.death_year = req.body.death_year;
   pirateToEdit.base = req.body.base;
   pirateToEdit.nickname = req.body.nickname;

   console.log('successful put');
   res.redirect('/pirates');
})

module.exports = router;