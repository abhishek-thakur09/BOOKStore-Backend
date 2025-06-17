
const express = require('express');
const app = express();
const mongodb = require("./database/dbConnection");
const http = require("http");

<<<<<<< HEAD

app.get('/user/:userID/:password', (req, res)=>{

    console.log(req.params)

    res.send({
        firstName: "Abhishek",
        lastName :"Thakur"
    });
=======
app.get("/", (req, res)=>{
    res.send("Namste Abhishek");
>>>>>>> 92c797d2379022f3bf6f150f50a9e3e2ee79ce2a
})



const server = http.createServer(app);


mongodb().then(() => {

    console.log("database connection is successfull!! ");
    
app.listen(9999, ()=>{
    console.log(`App listening on port 9999`);
})

}).catch((err) => {
    console.error("database connot be connected "+ err.message);
});
