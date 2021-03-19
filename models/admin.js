const mongoose = require('mongoose')

module.exports = mongoose.model('admin', new mongoose.Schema({
  email: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  }
}), 'admins')
