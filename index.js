const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/users", async (req,res) => {
    const users = await User.find({});
    res.status(200).send(users);
});

app.get("/users/:id", async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
});

app.post("/users", async (req,res) => {
    User.create(req.body).then((result) => {
        res.status(201).send({id:result._id});
    })
});


app.patch("/users/:id",async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id})
        if(req.body){
            user = req.body
        }

        await user.save();
        res.status(200).send(user);
    }catch{
        res.status(404);
        res.send({error: "User doesn't exist!!"})
    }
})


app.delete("/users/:id",async(req,res) => {
    User.findByIdAndRemove(req.params.id).then((result)=>{
        res.status(200).send({message:"Successfully Deleted!"});
    })
})


app.listen(3000, ()=> {
    console.log("LISTENING ON PORT 3000!")
});
