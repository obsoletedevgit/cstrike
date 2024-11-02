//RUN WEB SERVER

const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const fs = require('fs')

app = express();

app.use('/', express.static(path.resolve('/')))

app.get('/', (req, res) => {
    res.send(fs.readdir())
})


app.listen(process.env.PORT, () =>{
    console.log("Alive!")
});