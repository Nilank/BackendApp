// Variables Required to build app
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require('./models/user');

// Connection to local mongodb database
mongoose.connect('mongodb://localhost:27017/backendApp', { 
    useNewUrlParser: true,
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database Connected");
});

// Using Express.JS to build Server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// HTTP Get Request to fetch all the Users from the DB
app.get("/users", async (req,res) => {
    const users = await User.find({});
    res.status(200).send(users);
});

// HTTP Get Request to fetch only the single user
app.get("/users/:id", async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
});

// HTTP Post Request to create a new User
app.post("/users", async (req,res) => {
    User.create(req.body).then((result) => {
        res.status(201).send({id:result._id});
    })
});

// HTTP Put Request to update the user by id
app.put("/users/:id",async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id});
        if(req.body){
            user.name = req.body.name
        }

        await user.save();
        res.status(200).send(user);
    }catch{
        res.status(404);
        res.send({error: "User doesn't exist!!"})
    }
})

// HTTP Delete Request to delete the User by id
app.delete("/users/:id",async(req,res) => {
    User.findByIdAndRemove(req.params.id).then((result)=>{
        res.status(200).send({message:"Successfully Deleted!"});
    })
})


app.listen(3000, ()=> {
    console.log("LISTENING ON PORT 3000!")
});
