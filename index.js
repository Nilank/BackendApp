const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongo://localhost:27017/backendApp', { useNewUrlParser: true })
    .then(() => {
        console.log("Connection Open!!")
    })
    .catch(err => {
        console.log("Mongoose Connection Error!!")
        console.log(err)
    })


app.get("/dog", (req,res) => {
    res.send('WOOF!')
})

app.listen(3000, ()=> {
    console.log("LISTENING ON PORT 3000!")
});
