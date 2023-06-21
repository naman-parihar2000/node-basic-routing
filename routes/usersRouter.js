const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(`Users Page`)
})

router.get('/:id', (req, res) => {
    res.json(`The id for the user selected ${req.params.id}`)
})

module.exports = router