const Country = require('../models/country');
const allCountries = require('../models/countryList.json');

const getCountries = async (req, res) => {
     console.log('hello')
    try {
          const countries = await Country.find()
          res.status(200).send(countries) 
       } catch(err) {
      console.error(err.message)          
     }      
  }

  const createCountries = async (req, res, next) => { 
    const onlyAfrica =  allCountries.filter((data) => data.region ==='Africa')

    const countriesToCreate = onlyAfrica.map(country => {
        return (
            new Country({
                name : country.name,
                alpha2: country['alpha-2'],
                alpha3: country['alpha-3'],
                countryCode: country['country-code'],
                iso : country['iso_3166-2'],
                region : country.region,
                subRegion: country['sub-region'],
                intermediateRegion: country['intermediate-region'],
                regionCode: country['region-code'],
                subRegionCode: country['sub-region-code'],
                intermediateRegionCode: country['intermediate-region-code']
            }) 
        )
    })

    countriesToCreate.map(async country => {
        return (
            await country.save()
        )
    })

    Promise.all(countriesToCreate).then(result => {
       res.status(200).send(result)
    })

    // const newCountry = new Country({
    //     name : onlyAfrica[0].name,
    //     alpha2: onlyAfrica[0]['alpha-2'],
    //     alpha3: onlyAfrica[0]['alpha-3'],
    //     countryCode: onlyAfrica[0]['country-code'],
    //     iso : onlyAfrica[0]['iso_3166-2'],
    //     region : onlyAfrica[0].region,
    //     subRegion: onlyAfrica[0]['sub-region'],
    //     intermediateRegion: onlyAfrica[0]['intermediate-region'],
    //     regionCode: onlyAfrica[0]['region-code'],
    //     subRegionCode: onlyAfrica[0]['sub-region-code'],
    //     intermediateRegionCode: onlyAfrica[0]['intermediate-region-code']
    // })
        // try {
        //     const country = await newCountry.save()
        //     res.status(200).send(country)
        // } catch(e) {
        //     console.log(e.message)
        // }
  }
  
// const createCountries = (req, res, next) => {

//     try {
//          const onlyAfrica =  allCountries.filter((data) => data.region==='Africa')
//           .map(data => data)
//           .filter( async(_location) => {
  
//               const {name} = req.body;
//               console.log(`${name} name from user`)
  
//               if(!name){ 
  
//                  return res.send(`Please only in Africa that this safari app covers`)                       
  
//               } else if(name === _location.name){    
  
//                    console.log(`${name} req matched ,xxxxxxxxx  api data ${_location.name}`)
  
  
//                await Country.findOne({name: _location.name}, async(err, place) => {
  
//                          if(err) console.error(err.message) ;         
//                          if(place)  {                                        //_____ if found user then reference user                 
                                                                                     
//                              res.json({
//                               message: `lets go safari in ${place.name} `
//                            })
//                           }
//                            else {                             //___sava country if in api and not in db
                            
//                             console.log('not in the system saving now')
//                             const Location = new Country (_location)
//                               await  Location.save((err) => {
//                                     if(err) throw error;
//                                     res.json({
//                                        message: `${_location}Created successfully added `
//                                     });
//                             })  
//                         }               
//                      })
                
//                 // console.log(`${createLocation()} `)
//               }
//               return undefined
//                res.json({ 
//                  message: `service not offered in ${name}` 
//                 })
//             })
//         //  res.status(200).send(onlyAfrica)       
//          } catch(err) {
//         console.error(err.message)          
//        }
           
//     }

    module.exports = {
        getCountries,
        createCountries
    }

 