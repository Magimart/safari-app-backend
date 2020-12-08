const express = require('express');
const { africa } = require('./africa');
const country = require('./country');
const { safaris} = require('./safaris');
const { activity} = require('./activities');
const user = require('./user');
 const auth = require('./auth');

const api = express.Router();

//___for all get routes
api.use('/api/africa', africa)
api.use('/api/countries', country)
api.use('/api/user', user)
api.use('/api/safari', safaris)
api.use('/api/activities', activity)


//_____________post routes
api.use('/api/auth', require('./auth.js'))


//___testing
// api.use('/api', require('./api.v0.js'))
// api.get('/test', (req, res) => res.send('test'))

module.exports = api; 
