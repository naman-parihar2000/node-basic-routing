const express = require('express')
const router = express.Router()
const { getTours, theTourId, checkID } = require('../controllers/toursController')

router.param('id', checkID)

router.get('/', getTours)

router.get('/:id', theTourId)

module.exports = router
