require('dotenv').config()
const express = require('express')
const app = express()

// to import the router we created in places.js
app.use('/places', require('./controllers/places'))


app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello world')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1> 404 Page</h1>')
})

app.listen(process.env.PORT)