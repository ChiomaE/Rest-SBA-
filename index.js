const express = require("express")
const app = express();
const port = 3000;

//middleware
const songs = require('./sampleData/songs')
const artists = require('./sampleData/artists')
var bodyParser = require('body-parser')

app.use(bodyParser.urlEncodeded({extended: true}))


app.get('/', (req,res)=>{
    res.send('Hello')
})


app.use((req,res)=> {
    res.status(404)
    res.json({error: `Resource not found`})
})

//port listen
app.listen(port,()=>{
    console.log(`This server is listening on port ${port}`)
})