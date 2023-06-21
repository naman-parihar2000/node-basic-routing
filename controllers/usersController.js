const fs = require('fs');

exports.getUsers = (req, res) => {
    res.json(`Users Page`)
}

exports.theUserId = (req, res) => {
    res.json(`The id for the user selected ${req.params.id}`)
}