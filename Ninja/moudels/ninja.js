const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type:{
    type:String,
    default:'point'
  },
  coordinates:{
    type:[Number],
    index:'2dsphere'
  }
})

// creat the ninja Scheema 
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  },
  rank: {
    type: String,
  },
  avilable: {
    type: Boolean,
    default: false
  }
  // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;

