//start core NodeJs Modules
const path = require("path");
const bodyParser = require('body-parser');
const compression = require("compression");
//end core NodeJs Modules

//start packages
const express = require('express');
//end packages

//start DataBase Connection
const connectDB = require('./src/config/db')
//end DataBase Connection

//start Express
const app = express();
//end Express

//start Define Routes
const investorRoute = require('./src/lib/routes/investor')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(compression());

//start CORS origin Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET , POST , PUT , PATCH , DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next()
})
//start CORS origin Middleware


//start  Main Routes
app.use('/api/investor', investorRoute);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App IS Running In Port ${PORT}`)
})
connectDB()
