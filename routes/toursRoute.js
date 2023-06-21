const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(`Tours Page`)
})

router.get('/:id', (req, res) => {
    res.json(`The id for the tour selected ${req.params.id}`)
})

module.exports = router
