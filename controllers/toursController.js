const fs = require('fs');

exports.getTours = (req, res) => {
    res.json(`Tours Page`)
}

exports.theTourId = (req, res) => {
    res.json(`The id for the tour selected ${req.params.id}`)
}

exports.checkID = (req,res,next,val) => {
    console.log(`If the ID is equal to: ${val}...`);
    console.log(`It would be great!`);
    next()
}