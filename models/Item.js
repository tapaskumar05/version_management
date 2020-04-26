const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const  ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  version: {
    type: String,
    default: '1.0.0'
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);