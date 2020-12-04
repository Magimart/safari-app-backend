const express = require('express');
const Country = require('../models/country');
const allCountries = require('../models/countryList.json');


exports.createCountry = (req, res, next) => {

    try {
         const onlyAfrica =  allCountries.filter((data) => data.region==='Africa')
          .map(data => data)
          .filter( async(_location) => {
  
              const {name} = req.body;
              console.log(`${name} name from user`)
  
              if(!name){ 
  
                 return res.send(`Please only in Africa that this safari app covers`)                       
  
              } else if(name === _location.name){    
  
                   console.log(`${name} req matched ,xxxxxxxxx  api data ${_location.name}`)
  
  
               await Country.findOne({name: _location.name}, async(err, place) => {
  
                         if(err) console.error(err.message) ;         
                         if(place)  {                                        //_____ if found user then reference user                 
                                                                                     
                             res.json({
                              message: `lets go safari in ${place.name} `
                           })
                          }
                           else {                             //___sava country if in api and not in db
                            
                            console.log('not in the system saving now')
                            const Location = new Country (_location)
                              await  Location.save((err) => {
                                    if(err) throw error;
                                    res.json({
                                       message: `${_location}Created successfully added `
                                    });
                            })  
                        }               
                     })
                
                // console.log(`${createLocation()} `)
              }
              return undefined
               res.json({ 
                 message: `service not offered in ${name}` 
                })
            })
        //  res.status(200).send(onlyAfrica)       
         } catch(err) {
        console.error(err.message)          
       }
           
    }







