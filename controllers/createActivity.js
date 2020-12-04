const express = require('express');
const Activity = require('../models/activity');


exports.createActivity = async(req, res) => { 

    try {
  
        const {activityName, selectedCountries} = req.body;
          
        const newActivity = new Activity({activityName, selectedCountries});
  
          const addActivity = await newActivity.save( function(err) {
  
              if(err){ 
                      return res.status(400).json({
                       error: err
                     });
              }
              res.status(200).json({
                    message: "activity is added"
              });
            }
          );
   
        } catch(err) {
            console.error(err.message);
        }  
  }
  
  