const express = require('express');
const Country = require('../models/country');


   exports.selectCountry = async (req, res) => {
    const { name } = req.body
    try {  
  
      const country = await Country.findOne({name: name})
        if (!country) res.status(404).send('No such user')
         res.status(200).send(country) 
        } catch(err) {
          console.error(err.message)
        }
               
    }
  