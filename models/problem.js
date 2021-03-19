const mongoose = require('mongoose')

module.exports = mongoose.model('problem', new mongoose.Schema({
  question: {
    type: 'string',
    unique: true,
    required: true
  },
  answer: {
    type: 'boolean',
    required: true
  },
  correct: {
    type: 'string',
    required: true
  },
  incorrect: {
    type: 'string',
    required: true
  }
}), 'problems')
