const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv =  require('dotenv');
var cors = require('cors')
const UserRoutes = require('./routes/userRoutes.js');

dotenv.config()
const app = express()
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use('/users',UserRoutes)

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log("DB Connected Successfully")
        app.listen(PORT, () =>{
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })