const express = require('express');
const allCountries = require('../models/countryList.json');


exports.africa =  (req, res, next) => {
    try {
          const onlyAfrica = allCountries.filter((data) => data.region==='Africa')
                       .map(data => data)
                        res.status(200).send(onlyAfrica) 
         } catch(err) {
        console.error(err.message)          
       }
    }
    //http://localhost:8000/api/africa