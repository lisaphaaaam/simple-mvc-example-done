// Every Dog should have a
// name (string)
// breed (string)
// age (number)
// createdDate (Date);

const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
