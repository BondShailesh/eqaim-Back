const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const blogRoute = require('./src/routes/blog.route')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/blogs', blogRoute)

mongoose.connect('mongodb://localhost:27017/blog', () => {
    app.listen(8080, () => { console.log('working') })
})
