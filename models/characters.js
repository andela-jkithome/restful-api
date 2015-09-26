var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  universe: String,
  alliance: String,
  name: String,
  powers: String,
  weakness: String,
  ranking: Number
});

module.exports = mongoose.model('Character', CharacterSchema);