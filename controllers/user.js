const express = require('express');
const User = require('../models/user');
const Country = require('../models/country');

const getAll = (req, res) => {
    try {
            User.find({}, (err, results) => {
             res.status(200).send(results)                 
          })
           
       } catch(err) {
      console.error(err.message)          
     }      
  }

  const getOne = async (req, res) => {
    const { fName } = req.body
    try {  
  
      const user = await User.findOne({fName: fName})
        if (!user) res.status(404).send('No such user')
         res.status(200).send(user) 
        } catch(err) {
          console.error(err.message)
        }
               
    }

  const addCountryToWishlist = async (req, res, next) => {
    const { userId } = req.body
    console.log('work in progress')
    const { isoA3code } = req.params
    const { _id } = await Country.findOne({alpha3:isoA3code})

     await User.findByIdAndUpdate(userId, { $push: { selectedCountries: _id } })
}

  const create = async (req, res, next) => {
    const { username, name, email, profile, hashed_password} = req.body

    const newUser = new User({
        username, name, email, profile, hashed_password
    })

    try {
        const user = await newUser.save()
        res.status(200).send(user)
    } catch (e) {
        console.log(e.message)
    }
  }

  module.exports = {
    getAll,
    getOne,
    addCountryToWishlist,
    create
  }
  