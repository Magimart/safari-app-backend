const express = require('express');
const Activity = require('../models/activity');


exports.activity = (req, res) => {

    try {
      Activity.find().populate({path:"selectedCountries"}).exec((err, results) => {
        res.status(200).send(results)                 
     })

      } catch(err) {
        console.error(err.message)          
     }      
    }


  //   (err, results) => {
  //     res.status(200).send(results)                 
  //  }


  