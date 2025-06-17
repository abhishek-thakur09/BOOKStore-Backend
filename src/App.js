
const express = require('express');
const app = express()

app.get("/", (req, res)=>{
    res.send("Namste Abhishek");
})

app.use('/text', (req, res)=>{
    res.send("Namste!!");
})

app.listen(9999, ()=>{
    console.log(`App listening on port 9999`);
})