const express = require("express")
const app = express();
const port = 5000;

//middleware
const songs = require('./sampleData/songs')
const artists = require('./sampleData/artists')
/* var bodyParser = require('body-parser')

app.use(bodyParser.urlEncodeded({extended: true}))
 */

app.get('/', (req,res)=>{
    res.send('Welcome to the music artist api')
})

//Create new artist

//Prints all artists
app.get('/api/artists', (req,res)=>{
    res.json(artists)
})

//Prints all songs
app.get('/api/songs', (req,res)=>{
    res.json(songs)
})

// Prints artist info by id
app.get('/api/artists/:id', (req,res)=> {
    const songInfo = artists.find((a) => a.id == req.params.id)
    if(songInfo) res.json(songInfo)
    else next()
})

//error handling
app.use((req,res)=> {
    res.status(404)
    res.json({error: `Information not found`})
})

//port listen
app.listen(port,()=>{
    console.log(`This server is listening on port ${port}`)
})