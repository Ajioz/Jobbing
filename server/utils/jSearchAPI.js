require("dotenv").config();
const fs = require("fs");
const axios = require("axios");

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
const hotJobsPath_write = "./Details/hotJobs.json";

const path = [
  reactPath_write,
  vuePath_write,
  angularPath_write,
  nodePath_write,
  pythonPath_write,
  javaPath_write,
  goPath_write,
  phpPath_write,
  dotnetPath_write,
  othersPath_write,
  hotJobsPath_write,
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
  "hot jobs",
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
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};


// // Fetching jobs require rapid API once every 24 hours method
// exports.fetchJobs = async (req, res) => {
//   const delayedLoop = () => {
//     const processItem = async (index) => {
//       try {
//         const response = await axios.request(jsearhOption(queries[index]));
//         console.log(`Successfully fetch ${queries[index]} jobs - ${index}`);
//         newReactJobs(path[index], response.data.data);
//       } catch (error) {
//         console.error("Error: ", error);
//       }
//       if (index < queries.length - 1)
//         setTimeout(() => processItem(index + 1), 2000);
//       else console.log("Successfully fetched");
//     };
//     processItem(0);
//   };
//   delayedLoop();
// };

// Fetching jobs require rapid API once every 24 hours method
exports.fetchJobs = async () => {
  const delayedLoop = () => {
    const processItem = async (index) => {
      try {
        const response = await axios.request(jsearhOption(queries[index]));
        console.log(`Successfully fetch ${queries[index]} jobs - ${index}`);
        newReactJobs(path[index], response.data.data);
      } catch (error) {
        console.error("Error: ", error);
      }
      if (index < queries.length - 1)
        setTimeout(() => processItem(index + 1), 2000);
      else console.log("Successfully fetched");
    };
    processItem(0);
  };
  delayedLoop();
};