const express = require('express')
const { join } = require('path')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

// for deployment mLab:
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/scrape_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3000))
  .catch(e => console.log(e))

  // for later :
//   mongoose.connect(MONGODB_URI)



