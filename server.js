const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const projrouter = require('./routes/projRoutes');
const contactrouter = require('./routes/contactRoute');
const app = express();
// Routers

//BP Midware

require('dotenv').config()



app.use(bodyParser.json());
app.use(cors());


// DB Config

const db = process.env.REACT_APP_MONGO_KEY

app.use('/projdata', projrouter)
app.use('/contactforms', contactrouter)
// DB Connect

mongoose.connect(db)
    .then(()=>{
        console.log('MongoDB Connected...')
    })
    .catch(err=>
        console.log("Failed to connect to MongoDB services, please try again later.")
    );
    

    if(process.env.NODE_ENV === 'production'){
        app.use(express.static(("client/build")))
        app.get('*', (req, res)=>{
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        })
    }

// Server Init

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });

// Connection Successful!!!! :3