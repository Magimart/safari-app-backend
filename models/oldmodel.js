//--ref: https://mongoosejs.com/docs/schematypes.html
//______https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// //______________________selected schema
//     const travelToCountries =  ['Kenya', 'Rwanda', 'Tanzania', 'S Africa'];
//     const countriesSelectedSchema = new Schema({
//      selectedCountries : [String]
//       });
//     const countrySelectedSchema = new Schema({
//         countryName : String
//     });

// //___________________activity schema
    // const activitiesChosen =  ['Masai Mara', 'city tours', 'abedeere safaris', 'beach safari'];
    // const activitySelectedSchema = new Schema({
    //         selectedActivity:  { 
    //                        type: [String], 
    //                        lowercase: true, 
    //                        trim: true 
    //       }    
    //      // selectedActivity: [ { type: String, lowercase: true, trim: true }]       //--activity : [[String]] need a mechanism to handle duplication of "activity property"
    //     });

// });
        
//     //______________________travel dates schema

//     const travelDatesSchema = new Schema({
//         daysBetween: {  from: String, to: String} //--required----!!  about 4 a single day --how to validate
//     });
// //______________________budget schema
// const budgetPerDay = { perDayBudget: 13, maxBudget: 20};
// const allSafariBudget = { perDayBudget: 2000, maxBudget: 2200};
// //____option1
// const budgetSchema = new Schema({
//     perDayBudget: { between: Number, to: Number},
//     allSafariBudget: { between: Number, to: Number}  //---require
// });
// //____option2
// const budgetSchemaTest = new Schema({
//     safariBudget: {
//          perDayBudget: { between: Number, to: Number},
//          allSafariBudget: { between: Number, to: Number}  
//     }
//   })


//       const someSpecialWishSchema = new Schema({
//       myIntro: activitySelectedSchema
//   });


     //---methods to consider
    //  populate()
    //  exec()
    //  await()

    // //_________________________workin________________createSafaris schema

const safariSchema = new mongoose.Schema({
       
    safariTitle: countriesSelectedSchema,
    travelDates: [travelDatesSchema],
    budgetPlan : budgetSchemaTest,
    introText: [String],
    selectedActivities: activitySelectedSchema,
    someSpecialWish : [ ],
    createdAt: {type: Date, default: Date.now }

  });

  
//   module.exports = mongoose.model('Safari', safariSchema) 


//   const safariSchema = new mongoose.Schema({
       
//     safariTitle: countriesToSelectedSchema,
//     travelDates: [travelDatesSchema],
//     introText: [String],
//     addWishToSelectedActivity: {
//         selectedActivity:  { type: [String], lowercase: true, trim: true }    
//         // selectedActivity: [ { type: String, lowercase: true, trim: true }]       //--activity : [[String]] need a mechanism to handle duplication of "activity property"

//       },
//     createdAt: { type: Date, default: Date.now }
// // 
//   })
//   activitySelectedSchema
//   module.exports = mongoose.model('Safari', safariSchema) ;


//_____________________________default schema
// const defaultSafari = {
       
//       safariTitle : {
//       selectedCountries : ["Kenya", "Rwanda", "Tanzania", "S Africa"]
//      },   
//       travelDates : { 
//          daysBetween :  { "from": "01-Nov-2016", "to": "10-Nov-2016"} 
//       }, 
//         budgetPlan : { "safariBudget": {
//         perDayBudget : { "between": 10, "to": 15},
//         allSafariBudget: { "between": 300, "to": 600}  
//        }
//       },    
//       introText :  " Hi test i would love to have a trip through those mentioned places and i would be flexible with any traveller  schule adjustments if any. :) ",
//       selectedActivities : { 
//               selectedActivity:  ["masai mara safari", "city tours", "abedere safaris", "beach safari"] 
//            },
//       someSpecialWish : [ ]
  // }
 

    
// //______________________selected schema
// const travelToCountries =  ['Kenya', 'Rwanda', 'Tanzania', 'S Africa'];


// const countrySchema = new Schema({
//   _id : Schema.Types.ObjectId,
//    countryName: String,
//    activities: [{ type: Schema.Types.ObjectId, ref: 'Activity'}]
// });
//  module.exports = mongoose.model('Country', countrySchema);

// const userSchema = new Schema({
//     _id : Schema.Types.ObjectId,
//      name: String,
//      email: String,
//      username: String,
//      activities: [{ type: Schema.Types.ObjectId, ref: 'Activity'}],
//      countriesToVisit: [{ type: Schema.Types.ObjectId, ref: 'Country'}] 
// });

// module.exports = mongoose.model('User', userSchema);


// //___________________activity schema
// const activitiesChosenMock =  ['Masai Mara', 'city tours', 'abedeere safaris', 'beach safari'];

// const activitySelectSchema = new Schema({
//                 _id: Schema.Types.ObjectId, 
//                  activityName: String,  
//                  Locations: [{ type: Schema.Types.ObjectId, ref: 'Country'}] 
// });
// module.exports = mongoose.model('Activity', activitySelectSchema);

    
// //______________________travel dates schema

// const travelScheduleSchema = new Schema({
//     daysBetween: {  from: String, to: String}
// });
// module.exports = mongoose.model('Schedule', travelScheduleSchema);


// //______________________budget schema

// const budgetSchema = new Schema({
// safariBudget: {
//      perDayBudget: { between: Number, to: Number},
//      allSafariBudget: { between: Number, to: Number} ,
//      expenditure: [{ type: Schema.Types.ObjectId, ref: 'Traveler'}] 
//   }
// });
// module.exports = mongoose.model('Budget', budgetSchema);

// //_______________saySomething__post

// const saySomethingPostSchema = new Schema({
//   intro: []
//  });
//  module.exports = mongoose.model('Post', saySomethingPostSchema);

// const safariSchema = new mongoose.Schema({

//     selectedCountries: [{ type: Schema.Types.ObjectId, ref: 'Country'}],   
//     interests: [{ type: Schema.Types.ObjectId, ref: 'Activity'}],
//     travelDates: [],
//     budgetPlan : [],
//     introText: [{ type: Schema.Types.ObjectId, ref: 'Traveler'}],
//     selectedActivities: [],
//     someSpecialWish : [ ],
//     createdAt: []

//   });
  
//   module.exports = mongoose.model('Safari', safariSchema) 





 



