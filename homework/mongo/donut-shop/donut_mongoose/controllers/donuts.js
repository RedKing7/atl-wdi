//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var Donut = require("../models/donuts.js");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req,res)=>{
   Donut.find({})
      .then((donuts)=>{
         res.render('donuts/index',{
            donuts
         });
      })
      .catch((err)=>{
         console.log(err);
      })
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (req,res)=>{
   res.render('donuts/new');
})


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (req,res)=>{
   let thisId = req.params.id;
   Donut.findById(thisId)
   .then((donut)=>{
      res.render('donuts/show',{
         donut
      });
   })
   .catch((err)=>{
      console.log(err);
   })
})



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (req,res)=>{
   const newDonut = req.body;
      
   Donut.create({
         name: newDonut.name,
         description: newDonut.description,
         img: newDonut.img,
         price: newDonut.price,
         qty: newDonut.qty
   })
      .then(()=>{
         res.redirect('/')
      })
      .catch((err)=>{
         console.log(err);
      })
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (req,res)=>{
   let thisId = req.params.id;
   Donut.findById(thisId)
   .then((donut)=>{
      res.render('donuts/edit',{
         donut
      });
   })
   .catch((err)=>{
      console.log(err);
   })
})


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (req,res)=>{
   const updateDonut = req.body;
   const idToUpdate = req.params.id;
   Donut.findOneAndUpdate({_id: idToUpdate}, updateDonut, {new: true})
      .then(()=>{
         res.redirect(`/${idToUpdate}`);
      })
      .catch((err)=>{
         console.log(err)
      })
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
//real delete
router.delete('/:id', (req,res)=>{
   const donutId = req.params.id;
   Donut.findByIdAndRemove(donutId)
      .then((student)=>{
         res.redirect('/');
      })
      .catch((err)=>{
         console.log(err);
      })
})

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;