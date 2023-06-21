const express = require('express')
const router = express.Router()
const { getTours, theTourId, checkID, checkTheValidity } = require('../controllers/toursController')

router.param('id', checkID)
router.get('/', getTours)
router.get('/:id', checkTheValidity, theTourId)

module.exports = router
