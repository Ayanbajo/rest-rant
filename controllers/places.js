// to create and export an express.Router()
const router = require('express').Router()

// router.get('/', (req, res) => {
//     res.send('GET /places')
// })

// GET /places
router.get('/new', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/pastry.jpg'
      }]
      
    res.render('places/new')
})

module.exports = router
