const express = require('express')
const router = express.Router()
const { getUsers, theUserId } = require('../controllers/usersController')

router.get('/', getUsers)

router.get('/:id', theUserId)

module.exports = router