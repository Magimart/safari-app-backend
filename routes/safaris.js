const express = require('express');
const Safari = require('../models/safaris');


exports.safaris = (req, res) => {

    try {
          Safari.find({}, (err, results) => {
           res.status(200).send(results)                 
        })
      } catch(err) {
        console.error(err.message)          
     }      
    }
  
  