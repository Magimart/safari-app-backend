const express = require('express');
const Country = require('../models/country');

  exports.country = (req, res) => {
    try {

          Country.find({}, (err, results) => {
             res.status(200).send(results)                 
          })
         
          
       } catch(err) {
      console.error(err.message)          
     }      
  }
 

