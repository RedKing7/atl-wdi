//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;

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
   price: Number,
   qty: Number
})

const DonutModel = mongoose.model('Donut', DonutSchema);

//export your donut with module.exports()
module.exports = {
   DonutModel: DonutModel
}