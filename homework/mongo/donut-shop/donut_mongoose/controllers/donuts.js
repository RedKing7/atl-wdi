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
   res.send('Hi!');
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/', (req,res)=>{
   
})


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/', (req,res)=>{
   
})



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.get('/', (req,res)=>{
   
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/', (req,res)=>{
   
})


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.get('/', (req,res)=>{
   
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/', (req,res)=>{
   
})


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;