const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Job = require("../Major Project/models/jobListing");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL = "mongodb://127.0.0.1:27017/WageJobs";
async function main(){
    await mongoose.connect(MONGO_URL);
}
main()
    .then(()=>{
    console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


app.get("/",(req,res)=>{
    res.send("Hello Pritam");
})

//Index Route
app.get("/jobListing",async(req, res)=>{
    const allJobs = await Job.find({});
    res.render("./Jobs/index.ejs",{allJobs});
})
//New Route
app.get("/jobListing/new",(req,res)=>{
    res.render("./Jobs/new.ejs");
})
//Show Route
app.get("/jobListing/:id", async(req,res)=>{
    let {id} = req.params;
    const JobListing = await Job.findById(id);
    res.render("./Jobs/show.ejs",{JobListing});
})
//Create Route
app.post("/jobListing", async(req,res)=>{
    const newJob = new Job(req.body.jobListing);
    await newJob.save();
    res.redirect("/jobListing");
})
//Edit Route
app.get("/jobListing/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const JobListing = await Job.findById(id);
    res.render("./jobs/edit.ejs",{JobListing});
})
//Update Route
app.put("/jobListing/:id",async(req,res)=>{
    let {id} = req.params;
    await Job.findByIdAndUpdate(id, { ...req.body.jobListing }, { runValidators: true });
    res.redirect("/jobListing");
})
//Delete Route
app.delete("/jobListing/:id",async(req,res)=>{
    let {id} = req.params;
    await Job.findByIdAndDelete(id);
    res.redirect("/jobListing");
})


app.listen(8080,()=>{
    console.log("Listening to port 8080");
})


