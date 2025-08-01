const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
    trim: true
  },
  jobLocation: {
    type: String,
    required: true,
    trim: true
  },
  jobPay: {
    type: Number,
    required: true,
    trim: true
  },
  jobTime: {
    type: String,
    required: true,
    trim: true
  },
  jobDate: {
    type: Date,
    required: true
  },
  jobDescription: {
    type: String,
    required: true,
    trim: true
  },
  jobTags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;

