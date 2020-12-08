 
const express = require('express');
const countryController = require('../controllers/country')

const api = express.Router();

api.get('/getAll', countryController.getCountries)
api.post('/create', countryController.createCountries);                                   //more validators next in line and

 module.exports = api;   
