const express = require('express')
const router = express.Router()
const { getTours, theTourId, checkID, checkTheValidity, createTour, updateTour } = require('../controllers/toursController')

router.get('/', getTours)
router.get('/:id', theTourId)
router.param('id', checkID)
router.post('/createTour', createTour)
router.patch('/:id', updateTour)

module.exports = router