require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

//This is how to import a json file for reading it
const reactPath_read = require("../Details/reactJobs.json");
const jobPath_read = require("../Details/otherJobs.json");

//This is how to import a json file for writing into it
const reactPath_write = "./Details/reactJobs.json";

const rapid_key = process.env.rapid_key;

// write Reacts Jobs into json db helper method
const newReactJobs = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(reactPath_write, stringifyData);
};

// API methods option
const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/search",
  params: {
    query: "React Developer",
    page: "1",
    num_pages: "10",
  },
  headers: {
    "X-RapidAPI-Key": rapid_key,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

// Fetching jobs =require(rapid API once every 24 hours method
const fetchReact = async () => {
  try {
    const response = await axios.request(options);
    newReactJobs(response.data.data);
    console.log("Successfully fetch jobs");
  } catch (error) {
    console.error("Error: ", error);
  }
};

// Actual time interval logic
setInterval(fetchReact, 1000 * 60 * 60 * 24);

// Method to locally served React jobs dependent users UI jobs need
exports.getReactJobAsync = (req, res) => {
  return res.send(reactPath_read);
};

// Method to locally served dependent users UI jobs-details need
exports.getReactJobDetails = (req, res) => {
  let { job_id, source } = req.body;
  let reactJobDetail;
  if (!source) reactJobDetail = reactPath_read.filter((job) => job.job_id === job_id);
  else reactJobDetail = jobPath_read.filter((job) => job.job_id === job_id);
  return res.send(reactJobDetail);
};
