//RUN WEB SERVER

const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')

app = express(path.resolve('/'));

app.use(express.static())

app.listen(process.env.PORT, () =>{
    console.log("Alive!")
});