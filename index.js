require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// to import the router we created in places.js
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
  })

app.get('*', (req, res) => {
    res.render('error404')
})
  
// to pull the PORT variable from the .env file.
app.listen(process.env.PORT)





