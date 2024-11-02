//RUN WEB SERVER

const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const fs = require('fs')

app = express();

app.use('/cstrike', express.static(path.resolve('.')))

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(process.env.PORT, () =>{
    console.log("Alive!")
});