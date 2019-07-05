const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

// creat the ninja Scheema 
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  rank: {
    type: String,
  },
  avilable: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;

