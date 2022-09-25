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

app.use(bodyParser.json());
app.use(cors())


// DB Config

const db = 'mongodb+srv://jaydev:Halloween1984102999@portfoliodata.4gl1lr6.mongodb.net/?retryWrites=true&w=majority'

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

    let port = process.env.PORT || 5000
    app.listen(port, () => {
        console.log(`Express is working on port ${port}`);
    });


// Connection Successful!!!! :3