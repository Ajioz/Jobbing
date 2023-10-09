require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const rapid_key = process.env.rapid_key;
const jobPath = require("../Details/otherJobs.json");

// write other Jobs into json db helper method
const newJobs = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(jobPath, stringifyData);
};

// get other Job Data
exports.getJobAsync = (req, res) => {
  return res.send(jobPath);
};

// API methods option
const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/search",
  headers: {
    "X-RapidAPI-Key": rapid_key,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
  params: {
    query: "Software development",
    num_pages: "10",
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
// fetch();