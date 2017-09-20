const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates');

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
      pirate: pirate
   })
})

//create
router.post('/', (req, res) =>{
   const newPirate = req.body;
   pirateList.push(newPirate);
   console.log('Successfully posted new Pirate');
   res.redirect('/pirates');
})

//router.post('',)

module.exports = router;