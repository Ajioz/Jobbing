require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const rapid_key = process.env.rapid_key;

//This is how to import a json file for reading it
const jobPath_read = require("../Details/otherJobs.json");

//This is how to import a json file for writing into it
const jobPath_write = "./Details/otherJobs.json";

// write other Jobs into json db helper method
const newJobs = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(jobPath_write, stringifyData);
};

// get other Job Data
exports.getJobAsync = (req, res) => {
  return res.send(jobPath_read);
};

// API methods option
const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/search",
  params: {
    query: "Software Developer",
    page: "1",
    num_pages: "10",
  },
  headers: {
    "X-RapidAPI-Key": rapid_key,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

// Fetching jobs from rapid API once every 24 hours method
const fetchOthers = async () => {
  try {
    const response = await axios.request(options);
    newJobs(response.data.data);
    console.log("Successfully fetch jobs");
  } catch (error) {
    console.error("Error: ", error);
  }
};

// Actual time interval logic
setInterval(fetchOthers, 1000 * 60 * 60 * 24);