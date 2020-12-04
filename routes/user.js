const express = require('express');
const User = require('../models/user');

exports.user = async (req, res) => {
  const { fName } = req.body
  try {  

    const user = await User.findOne({fName: fName})
      if (!user) res.status(404).send('No such user')
       res.status(200).send(user) 
      } catch(err) {
        console.error(err.message)
      }
             
  }