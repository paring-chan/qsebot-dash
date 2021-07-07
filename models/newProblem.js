const mongoose = require('mongoose')

module.exports = mongoose.model('newProblem', new mongoose.Schema({
  question: {
    type: String,
    unique: true,
    required: true
  },
  script: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['select', 'custom']
  }
}), 'newProblem')
