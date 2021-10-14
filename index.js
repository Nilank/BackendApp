const express = require('express');
const mongoose = require("mongoose");
const User = require('./models/user');

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

app.get("/users", async (req,res) => {
    const users = await User.find({});
    res.status(200).send(users);
});

app.get("/users/:id", async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
})

app.listen(3000, ()=> {
    console.log("LISTENING ON PORT 3000!")
});
