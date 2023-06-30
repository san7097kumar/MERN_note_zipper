const express = require('express')
const notes =require('./data/notes');
const dotenv=require("dotenv");


const app = express();
dotenv.config();
//  api end point 
app.get('/',(req,res)=>{
    res.send('API is running');
})
app.get('/api/notes',(req,res)=>{
    res.json(notes);
}) 
//fetch single record
app.get('/api/notes/:id',(req,res) =>{
    const note=notes.find((n)=>n._id===req.params.id)
    res.send(note);
})  
const PORT=process.env.PORT || 4000;
app.listen(PORT,console.log(`Server started on PORT ${PORT}`));

