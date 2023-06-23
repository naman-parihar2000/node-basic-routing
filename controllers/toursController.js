const fs = require('fs');
const Tour = require('../models/tourModels')

exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.theTourId = (req, res) => {
  res.json(`The id for the tour selected ${req.params.id}`)
}

exports.checkID = (req, res, next, val) => {
  console.log(`If the ID is equal to: ${val}...`);
  console.log(`It would be great!`);
  next()
}

exports.checkTheValidity = (req, res, next) => {
  console.log(`This checks the validity of the ID`);
  console.log(`Can do other work too...`);
}

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}