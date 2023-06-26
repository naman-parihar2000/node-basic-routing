const express = require('express')
const router = express.Router()
const { getTours, theTourId, checkID, checkTheValidity, createTour } = require('../controllers/toursController')

router.get('/', getTours)
router.get('/:id' ,theTourId)
router.param('id', checkID)
router.post('/createTour', createTour)

module.exports = router