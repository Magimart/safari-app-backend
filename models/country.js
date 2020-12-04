const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Activity = require('../models/activity');
// const User = require('./user'); 

//______________country

 const countrySchema = new mongoose.Schema({

    // _id: mongoose.Types.ObjectId,
    name : String,
    alpha2: String,
    alpha3: String,
    countryCode: Number,
    iso : Number,
    region : String,
    subRegion: String,
    intermediateRegion:String,
    regionCode:Number,
    subRegionCode:Number,
    intermediateRegionCode: String,
    activities : [ ],
    UsersWithThisLocation : [{type : mongoose.Types.ObjectId, ref: 'User'} ],
    // activities : [{type : mongoose.Schema.Types.ObjectId, ref: 'Activity'} ],
    createdAt: {type: Date, default: Date.now }
});  


module.exports = mongoose.model('Country', countrySchema) 

 //______option2

//   const Country = new mongoose.Schema({

//     name : String,
//     alpha2: String,
//     alpha3: String,
//     countryCode: Number,
//     iso : Number,
//     region : String,
//     subRegion: String,
//     intermediateRegion:String,
//     regionCode:Number,
//     subRegionCode:Number,
//     intermediateRegionCode: String,
//     activities : [ ],
//     createdAt: {type: Date, default: Date.now }
//   });

//  module.exports = Country;

  //________________________default country
  // app.get('/africa', (req, res) => {

  //   try {

        // const onlyAfrica = allCountries.filter((data) => data.region==='Africa')
        //                  .map(data => data)
        // {  }                  res.status(200).send(onlyAfrica)



        //___________testin working
//         const onlyAfrica = allCountries.filter((data) => data.region==='Africa')
//         .map(data => data)
//         .filter((_name) => {
//             return _name.name==='Rwanda';
//             const { name } = req.body;
//          }

//          )
//          res.status(200).send(onlyAfrica)
         
                        
//          } catch(err) {
//         console.error(err.message)          
//        }      
//     }

// ) 
  