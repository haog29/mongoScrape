const { Schema, model } = require('mongoose')

const db = {
  Post: require('./post.js')(Schema, model)
}

module.exports = db
