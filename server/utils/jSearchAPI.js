require("dotenv").config();
const fs = require("fs");
const axios = require("axios");

const rapid_key = process.env.rapid_key;

//This is how to import a json file for writing into it
const reactPath_write = "./Details/reactJobs.json";
const angularPath_write = "./Details/angularJobs.json";
const vuePath_write = "./Details/vueJobs.json";
const nodePath_write = "./Details/nodeJobs.json";
const pythonPath_write = "./Details/pythonJobs.json";
const javaPath_write = "./Details/javaJobs.json";
const goPath_write = "./Details/golangJobs.json";
const phpPath_write = "./Details/phpJobs.json";
const dotnetPath_write = "./Details/dotnetJobs.json";
const othersPath_write = "./Details/otherJobs.json";

const path = [
  reactPath_write,
  angularPath_write,
  vuePath_write,
  nodePath_write,
  pythonPath_write,
  javaPath_write,
  goPath_write,
  phpPath_write,
  dotnetPath_write,
  othersPath_write
];

const queries = [
  "React Developer",
  "VueJs Developer",
  "Angular Developer",
  "Nodejs Developer",
  "Python Developer",
  "Java Developer",
  "GoLang Developer",
  "PHP Developer",
  "DotNet Developer",
  "Software Dev jobs",
];

// write Reacts Jobs into json db helper method
const newReactJobs = (path, data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(path, stringifyData);
  console.log(`Successfully written to ${path} jobs`);
};

const jsearhOption = (query) => {
  return {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: query,
      page: "1",
      num_pages: "2",
    },
    headers: {
      "X-RapidAPI-Key": rapid_key,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};

// Fetching jobs =require(rapid API once every 24 hours method
const fetchReact = async () => {
  const delay = 5000; //5seconds
  for (let jobType; jobType <= queries.length; jobType++) {
    try {
      const response = await axios.request(jsearhOption(jobType));
      console.log(`Successfully fetch ${queries[jobType]} jobs`);
      newReactJobs(path[jobType], response.data.data);
    } catch (error) {
      console.error("Error: ", error);
    }
    await timer(delay);
  }
};


// Run every 48 hours.  This logic automate the data fetching every two days
exports.timerFunc = setInterval(fetchReact, 1000 * 60 * 60 * 48);