require("dotenv").config();
const axios = require("axios");

const React = require("../model/reactModel");
const Angular = require("../model/angularModel");
const VueJs = require("../model/vueModel");
const Nodejs = require("../model/nodeModel");
const Python = require("../model/pythonModel");
const Java = require("../model/javaModel");
const GoLang = require("../model/goLangModel");
const PHP = require("../model/phpModel");
const DotNet = require("../model/dotNetModel");
const HotJobs = require("../model/hotJobModel");
const Others = require("../model/otherModel");

const model = [
  React,
  VueJs,
  Angular,
  Nodejs,
  Python,
  Java,
  GoLang,
  PHP,
  DotNet,
  Others,
  HotJobs,
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

const jsearchOption = (query) => {
  return {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: `${query}, remote`,
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};

exports.findDaysInterval = async () => {
  // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
  let daysTracker = new Date() - 1000 * 60 * 60 * 24 * 2;

  let rawDaysTracker = new Date(daysTracker);
  let trackerDay = rawDaysTracker.getDay() + 1;

  let storedDate = 0;

  const count = await React.countDocuments();
  if (count === 0) return storedDate;

  const reactJobs = await React.find({});
  if (reactJobs) {
    storedDate = new Date(Number(reactJobs[0].updatedAt)).getDay() + 1;
  }
  if (storedDate - trackerDay === 0) {
    fetchJobs();
  } else {
    console.log("Not yet time");
  }
};

// Create Jobs
const populateData = async (Stack, Job) => {
  try {
    const count = await Stack.countDocuments();
    if (count === 0) return await Stack.create({ data: Job });
    else {
      const findData = await Stack.find({});
      if (findData) {
        const id = findData[0]._id;
        return await Stack.findOneAndUpdate({ id }, Job, {
          new: true,
          runValidators: true,
        });
      }
    }
  } catch (error) {
    return console.log("Error: error with accessing collection");
  }
};

// Fetching jobs require rapid API once every two days callback function
const fetchJobs = async () => {
  const delayedLoop = () => {
    const processItem = async (index) => {
      try {
        // const { data } = await axios.request(jsearchOption(queries[index]));
        console.log(`Successfully fetch ${queries[index]} jobs - ${index}`);
        // populateData(model[index], data);
      } catch (error) {
        console.error("Error: ", error);
      }
      if (index < queries.length - 1)
        setTimeout(() => processItem(index + 1), 2000);
      else {
        console.log("Successfully fetched");
      }
    };
    processItem(0);
  };
  delayedLoop();
};

// // Fetching jobs require rapid API once every two days callback function
// exports.fetchJobs = async (req, res) => {
//   const delayedLoop = () => {
//     const processItem = async (index) => {
//       try {
//         const { data } = await axios.request(jsearchOption(queries[index]));
//         console.log(`Successfully fetch ${queries[index]} jobs - ${index}`);
//         populateData(model[index], data);
//       } catch (error) {
//         console.error("Error: ", error);
//       }
//       if (index < queries.length - 1)
//         setTimeout(() => processItem(index + 1), 2000);
//       else {
//         res.status(200).send("Successfully fetched");
//         console.log("Successfully fetched");
//       }
//     };
//     processItem(0);
//   };
//   delayedLoop();
// };