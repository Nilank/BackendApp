const express = require('express');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/backendApp', { 
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database Connected");
});

const app = express();

app.get("/", (req,res) => {
    res.send('WOOF!')
})

app.listen(3000, ()=> {
    console.log("LISTENING ON PORT 3000!")
});
