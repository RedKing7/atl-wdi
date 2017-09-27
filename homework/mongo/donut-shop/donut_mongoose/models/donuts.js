//requirements: require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;

const positive = (value) =>{
   return value >= 0;
}

const DonutSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   img: String,
   price: {
      type: Number,
   },
   qty: {
      type: Number,
      validate : {
         validator : Number.isInteger,
         message   : '{VALUE} must be integer'
       },
   }
})

const DonutModel = mongoose.model('Donut', DonutSchema);

//export your donut with module.exports()
module.exports = DonutModel