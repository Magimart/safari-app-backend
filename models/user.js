const mongoose = require('mongoose');
const crypto = require('crypto');
//  const Country = require('../models/country');
//  const Safari = require('../models/safaris');
 const Schema = mongoose.Schema;

//  country: {type : mongoose.Types.ObjectId, ref: 'Country'},
//  selectedCountries: [{type : mongoose.Schema.Types.ObjectId, ref: 'Country'}],
//  createdSafari: [{type : mongoose.Schema.Types.ObjectId, ref: 'Safari'}],
//  joinedSafari: [{type : mongoose.Schema.Types.ObjectId, ref: 'Safari'}], 
//  memberSince: { type: Date, default: Date.now }



const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            max: 32,
            unique: true,
            index: true,
            lowercase: true
        }, 
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        profile: {
            type: String,
            required: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String,
        about: {
            type: String
        },
        role: {
            type: Number,
            trim: true
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        resetPasswordLink: {
            data: String,
            default: ''
        },

         country: {type : mongoose.Types.ObjectId, ref: 'Country'},
         selectedCountries: [{type : mongoose.Schema.Types.ObjectId, ref: 'Country'}],
        createdSafari: [{type : mongoose.Schema.Types.ObjectId, ref: 'Safari'}],
        joinedSafari: [{type : mongoose.Schema.Types.ObjectId, ref: 'Safari'}], 
         memberSince: { type: Date, default: Date.now }


        
    },
    { timestamp: true }
);


userSchema
   .virtual('password')                //more search on virtual pass field

   .set(function (password) {

                                        // create a temp '_Password' variable
       this._password = password;

                                         //generate salt
       this.salt = this.makeSalt();

                                          //encryptPassword
       this.hashed_password = this.encryptPassword(password);

    })
    .get(function() { 

    return this._password;

});
                                    //user schema methods
                                    
    userSchema.methods = {
        //showing errors at 84
                                            //we authentic user by comparing the plainText pass from the user with the encryrpted version of it in the db and returns true if matched then authenticate
        authenticate : function (plainText) {

           return this.encryptPassword(plainText) === this.hashed_password;

           },

                                      // we hash the pass
        encryptPassword: function(password) { 

           if(!password) return '';

           try {
                  return crypto 
                     .createHmac('sha1', this.salt)
                     .update(password)
                     .digest('hex');

              } catch (err) { 
                return '';
            }

        },

                      // create another method to add salt

             makeSalt : function () {

                return Math.round(new Date().valueOf() * Math.random()) + '';

               }

     };  
   

module.exports = mongoose.model('User', userSchema);