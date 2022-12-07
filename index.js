const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const blogRoute = require('./src/routes/blog.route')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/blogs', blogRoute)

app.listen(PORT, () => {
    mongoose.connect('mongodb+srv://eqaim:12345@cluster0.hdplh8i.mongodb.net/?retryWrites=true&w=majority', () => {
        console.log('working');
    })
})

