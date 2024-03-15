const express = require("express")
const app = express();
const port = 5000;

//middleware
var bodyParser = require('body-parser')
const songs = require('./sampleData/songs')
const artists = require('./sampleData/artists')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.get('/', (req,res)=>{
    res.send('Welcome to the music artist api')
})

//Prints all artists
app.get('/api/artists', (req,res)=>{
    res.json(artists)
})

//Prints all songs
app.get('/api/songs', (req,res)=>{
    res.json(songs)
})


//Create new artist
app.post('/api/artists', (req,res) =>{
    if(req.body.name && req.body.genre){
        if(artists.find((a) => a.name == req.body.name)){
            res.json({error:'This artist already exists'})
        }

        const artist = {
            id: artists[artists.length-1].id+1,
            name: req.body.name,
            genre: req.body.genre
        }

        artists.push(newArtist)
        res.json(artists[artists.length-1])
    } else {
        res.json({error: 'Insufficient Data'})
    }


})

//Delete Artists
app.delete((req, res, next)=> {
    const artist = artists.find((a,i)=>{
        if(a.id == req.params.id){
            artists.splice(i,1)
            return true
        }
    })

    if(artist) res.json(artist)
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