const express = require('express')
const router = express.Router()
const { getTours, theTourId, checkID, checkTheValidity, createTour, updateTour, deleteTour } = require('../controllers/toursController')

router.param('id', checkID)
router.get('/', getTours)
router.get('/:id', theTourId)
router.post('/createTour', createTour)
router.patch('/:id', updateTour)
router.delete('/:id', deleteTour)

module.exports = router