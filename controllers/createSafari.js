
const express = require('express');
const Safari = require('../models/safaris');


exports.createSafari = async(req, res) => { 

    try {
  
        const {
               safariName, startDate, endDate, perDayBudget, allSafariBudget, introInfo,
               createdBy, live, participants, countries, activities, createdAt, lastUpdatedAt
        } = req.body;
          
        const newSafari = new Safari({
  
          safariName, startDate, endDate, perDayBudget, allSafariBudget, introInfo,
          createdBy, live, participants, countries, activities, createdAt, lastUpdatedAt
  
        });
  
          const saveSafari = await newSafari.save( function(err) {
  
              if(err){ 
                      return res.status(400).json({
                       error: err
                     });
              }
              res.status(200).json({
                    message: `safari is created`
              });
            }
          );
        } catch(err) {
            console.error(err.message);
        }  
  }