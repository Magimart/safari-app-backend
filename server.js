//___ref__https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
require ('dotenv').config();

const User = require('./models/user');

const africa = require('./routes');
 const app = express();

 mongoose
   .connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}) 
   .then(() => console.log('DB connected'));

//______________middlewares 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use("/api", routes) // new


       if(process.env.NODE_ENV = 'development') {
         app.use(cors({origin: `${process.env.CLIENT_URL}`  }));
        }



//______________all api routes path
app.use(require('./routes')) 


  
   
 //______________________________________________________________________________________
//________user apis
//______________________________________________________________________________________
app.post('/add-user', async(req, res) => {

  try {

    const {
          fName, sName,userName, userEmail, password, createdSafari, joinedSafari, selectedCountries, memberSince 
           } = req.body;
        
     const newUser = new User( 
      {
        fName, sName,userName, userEmail, password, createdSafari, joinedSafari, selectedCountries, memberSince 
      }
     );

      const saveUser = await newUser.save( function(err) {

             if(err){ 
                     return res.status(400).json({
                     error: err
                   });
                 }

                  res.json({
                  message: 'new user successfully added'
                 });
              }
            );
 
        // res.json( createSafari);

  } catch(err) {
   console.error(err.message);
  }  
});

//___________________________________________test ref_____________________________________


app.get('/populate-ref-user', (req, res) => {

  try {

    User.find() 
    .select()
    .populate("5fc3566e9820082cac9b50e8")
    .exec()
    .then(data => res.status(200).send(data))

      } catch(err) {
     console.error(err.message)          
   }      
 }

);


//handle the port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`safari sharing app is running at the backend on ${port}`);
});

 
























