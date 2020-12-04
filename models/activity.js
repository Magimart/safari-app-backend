//--ref: https://mongoosejs.com/docs/schematypes.html
//______https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
const mongoose = require('mongoose')
const Country = require('./country');

//_____________________activities 



const activitySchema = new mongoose.Schema({
       
    activityName : String,
    selectedCountries : {type : mongoose.Schema.Types.ObjectId, ref: 'Country'}
 
});
module.exports = mongoose.model('Activity', activitySchema) 









 



