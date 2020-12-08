//___ref__https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
require ('dotenv').config();
const multer  = require('multer')
const path = require('path');

const User = require('./models/user');

const africa = require('./routes');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));

 mongoose
   .connect(process.env.DATABASE_CLOUD, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}) 
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
//________upload file
//______________________________________________________________________________________


const storage = multer.diskStorage(

   {
   destination: (req, file, next) => {
     next(null, './public/profiles')
   },
   filename: (req, file, next) => {


      if(file.fieldname === 'image' ) {
        
        const acceptedFileExtensions =  ['jpg','jpeg', 'png', 'mp3', 'gif'];

            acceptedFileExtensions.forEach((xtension, index) => {  

             console.log(`${xtension}   ${index} `)
    
            const mimetypePortions = file.mimetype.split('/');                          
          
            if(`${mimetypePortions[1]}` === xtension) {

            console.log(`${'files format'} ${mimetypePortions[1]} ${xtension}`)

              console.log('successfully uploaded') //---to send back to client
              console.log( `${'saved on temp Images'}  ${xtension}  ${mimetypePortions[1]}`);

              next(null, `${file.fieldname }-${Date.now()}.${mimetypePortions[1]}`)

              }
              return undefined;
          });
           
        }else if (file.fieldname === 'photos'){
                console.log('multiple uploads')
           return  next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
       }
       return console.log('not known files')

   }  //--end filename
 })
 
    const upload = multer({ storage });


//-------------single upload

app.post('upload-profile', upload.single("profiles"), async (req, res) => {

      try {
           res.sendFile(`${__dirname}/public/profile/${req.file.filename}`);
       }catch (err){
          console.Error(err.message)
      }
   }
);


//------------multiple upload

// app.post('/api/photos/uploads', upload.array('photos', 12),  (req, res, next) => {
 

//     try {

//         const  {files }  = req
    
//           if (!files && !files.length  ) {
//             return res.status(400).send('Please upload more than one file');
//           }
    
//           res.send( `<div> Here is yo Uploads <br/> ${files.map(file => `<img src="/temp-Images/${file.filename}"  width="300"/>` )} </div>`);

//     }catch (err){
//         console.log(err.message)
//    }

// });



  
   
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

 
























