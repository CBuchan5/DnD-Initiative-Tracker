const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  initiative: {
    type: Integer,
    required: true
  },
  hit_points: {
    type: Integer,
    required: true
  },
  description: {
    type: String
  },
});

module.exports = Player = mongoose.model('player', PlayerSchema);