const express = require('express')
const router = express.Router()
const { getTours, theTourId, checkID, checkTheValidity, createTour } = require('../controllers/toursController')

router.param('id', checkID)
router.get('/', getTours)
router.get('/:id', checkTheValidity, theTourId)
router.post('/createTour', createTour)

module.exports = router