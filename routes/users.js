const express = require('express');
const User = require('../models/user');

exports.users = (req, res) => {

    try {
            User.find({}, (err, results) => {
             res.status(200).send(results)                 
          })
           
       } catch(err) {
      console.error(err.message)          
     }      
  }
  