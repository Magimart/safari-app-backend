const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Country = require('../models/country'); 
// const User = require('./user'); 
// const Activity = require('./activity'); 

//___________safari
const safariSchema = new mongoose.Schema({
       
    safariName : [{type : mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
    startDate: Date,
    endDate: Date,
    perDayBudget : {min: Number, max: Number},
    allSafariBudget : {min: Number, max: Number},
    introInfo : String,
    createdBy: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    live: Boolean,
    participants : [{type : mongoose.Schema.Types.ObjectId, ref: 'User'}],
    countries : [{type : mongoose.Schema.Types.ObjectId, ref: 'Country'}],
    activities : [{type : mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
    createdAt: {type: Date, default: Date.now },
    lastUpdatedAt: {type: Date, default: Date.now }

  });
  
  module.exports = mongoose.model('Safari', safariSchema)


 
 

   