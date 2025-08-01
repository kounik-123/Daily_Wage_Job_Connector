const mongoose = require("mongoose");
const initData = require("./data.js");
const Job = require("../models/jobListing.js");

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

const initDB = async () =>{
    await Job.deleteMany({});
    await Job.insertMany(initData.data);
    console.log("Data was initialized");
};
initDB();
