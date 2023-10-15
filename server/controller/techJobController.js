//This is how to import a json file for reading it
const reactPath_read = require("../Details/reactJobs.json");
const angularPath_read = require("../Details/angularJobs.json");
const vuePath_read = require("../Details/vueJobs.json");
const nodejsPath_read = require("../Details/nodeJobs.json");
const pythonPath_read = require("../Details/pythonJobs.json");
const javaPath_read = require("../Details/javaJobs.json");
const golangPath_read = require("../Details/golangJobs.json");
const phpPath_read = require("../Details/phpJobs.json");
const dotnetPath_read = require("../Details/dotnetJobs.json");
const othersPath_read = require("../Details/otherJobs.json");


// Method to locally served React jobs dependent users UI jobs need
exports.getReactJobAsync = (req, res) => {
  return res.send(reactPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getAngularJob = (req, res) => {
  return res.send(angularPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getVueJob = (req, res) => {
  return res.send(vuePath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getNodeJob = (req, res) => {
  return res.send(nodejsPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getPythonJob = (req, res) => {
  return res.send(pythonPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getJavaJob = (req, res) => {
  return res.send(javaPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getGolangJob = (req, res) => {
  return res.send(golangPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getPhpJob = (req, res) => {
  return res.send(phpPath_read);
};

// Method to locally served React jobs dependent users UI jobs need
exports.getDotnetJob = (req, res) => {
  return res.send(dotnetPath_read);
};

// get other Job Data
exports.getJobAsync = (req, res) => {
  return res.send(othersPath_read);
};

// Method to locally served dependent users UI jobs-details need
exports.getJobDetails = (req, res) => {
  let { job_id, source } = req.body;
  switch (source) {
    case "React": {
      let jobDetail = reactPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Angular": {
      let jobDetail = angularPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Vue": {
      let jobDetail = vuePath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Nodejs": {
      let jobDetail = nodejsPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Python": {
      let jobDetail = pythonPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Java": {
      let jobDetail = javaPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "GoLang": {
      let jobDetail = golangPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "PhP": {
      let jobDetail = phpPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Dotnet": {
      let jobDetail = dotnetPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Others": {
      let jobDetail = othersPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    default:
      break;
  }
};