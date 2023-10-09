require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const reactPath = require("../Details/reactJobs.json");
const jobPath = require("../Details/otherJobs.json");
const rapid_key = process.env.rapid_key;

// write Reacts Jobs into json db helper method
const newReactJobs = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(reactPath, stringifyData);
};


/*const ReactJobAsync = (req, res) => {
  fs.readFile(reactPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(JSON.parse(data));
    res.send(JSON.parse(data));
  });
};*/

// get ReactJs Job Data
const getReactJobData = () => {
  const jsonData = fs.readFileSync(reactPath);
  return JSON.parse(jsonData);
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
    query: "React developer",
    num_pages: "10",
  },
};

// Fetching jobs =re1uire(rapid API once every 24 hours method
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
// fetch();

// Method to locally served React jobs dependent users UI jobs need
exports.getReactJobAsync = (req, res) => {
  return res.send(reactPath);
};

// Method to locally served dependent users UI jobs-details need
exports.getReactJobDetails = (req, res) => {
  let {job_id, source } = req.body;
  let reactJobDetail;
  if(!source) reactJobDetail = reactPath.filter((job) => job.job_id === job_id);
  else reactJobDetail = jobPath.filter((job) => job.job_id === job_id);
  return res.send(reactJobDetail);
};