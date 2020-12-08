 
const express = require('express');
const { createSafari } = require('../controllers/createSafari')
const { createActivity } = require('../controllers/createActivity');
const { selectCountry } = require('../controllers/selectCountry');
// signup
const { signup, signIn  } = require('../controllers/auth')
const { runValidation } = require('../validators');
const { userSignupValidator } = require('../validators/auth');

const api = express.Router();
                                 //more validators next in line and
api.post('/create-safari', createSafari);
api.post('/create-activity', createActivity);
api.post('/select-country', selectCountry); // dead


api.post('/signup', userSignupValidator, runValidation, signup);                                                //more validators next in line and
api.post('/signin', userSignupValidator, runValidation, signIn);
// api.get('/signout', signOut);

 module.exports = api;   
