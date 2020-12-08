 
const express = require('express');
const userController = require('../controllers/user')

const api = express.Router();

api.get('/getAll', userController.getAll)
api.get('/getOne', userController.getOne);
api.post('/create', userController.create);
api.post('/addToWishlist/:isoA3code', userController.addCountryToWishlist);

 module.exports = api;   
