//RUN WEB SERVER

const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')

app = express();

app.use('/cstrike', express.static(path.resolve('./cstrike/')))

app.get('/', (req, res) => {
    res.send("live")
})

app.listen(process.env.PORT, () =>{
    console.log("Alive!")
    console.log(path.resolve('./cstrike/'))
});