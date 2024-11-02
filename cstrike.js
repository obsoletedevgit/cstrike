//RUN WEB SERVER

const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')

app = express();

app.use(express.static(path.resolve('/')))

app.listen(process.env.PORT, () =>{
    console.log("Alive!")
});