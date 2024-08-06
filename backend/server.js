const express = require("express");
const color = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require('./routes/rootroutes');
const connectDB = require("./config/db");
connectDB()
const app =express()
const PORT = process.env.PORT ||  9000 

app.get('/',(req,res)=>{
    res.send("api is working");   
})

app.use('/fashiontrends',rootroute)

app.listen(PORT,()=>{
    console.log(PORT);
    console.log(`Server is running on ${PORT}`.bgBlue.white)
});

