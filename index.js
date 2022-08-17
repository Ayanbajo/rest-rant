require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// to import the router we created in places.js
app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1> 404 Page</h1>')
})
// to pull the PORT variable from the .env file.
app.listen(process.env.PORT)





