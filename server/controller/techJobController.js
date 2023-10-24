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
const hotPath_read = require("../Details/hotJobs.json");

// get other Job Data
exports.getOtherJob = (req, res) => {
  return res.status(200).json({data:othersPath_read, db: 'Other'});
};

// Method to locally served React jobs dependent users UI jobs need
exports.getReactJob = (req, res) => {
  return res.json({ data: reactPath_read, db: "Reactjs" });
};

// Method to locally served React jobs dependent users UI jobs need
exports.getAngularJob = (req, res) => {
  return res.json({data: angularPath_read, db:'Angular'});
};

// Method to locally served React jobs dependent users UI jobs need
exports.getVueJob = (req, res) => {
  return res.json({ data: vuePath_read, db: "VueJs" });
};

// Method to locally served React jobs dependent users UI jobs need
exports.getNodeJob = (req, res) => {
  return res.json({ data: nodejsPath_read, db: "Nodejs" });
};

// Method to locally served React jobs dependent users UI jobs need
exports.getPythonJob = (req, res) => {
  return res.json({data: pythonPath_read, db: 'Python'});
};

// Method to locally served React jobs dependent users UI jobs need
exports.getJavaJob = (req, res) => {
  return res.json({data: javaPath_read, db: 'Java'});
};

// Method to locally served React jobs dependent users UI jobs need
exports.getGolangJob = (req, res) => {
  return res.json({data:  golangPath_read, db: "GoLang" });
};

// Method to locally served React jobs dependent users UI jobs need
exports.getPhpJob = (req, res) => {
  return res.json({ data: phpPath_read, db: "PHP" });
};

// Method to locally served React jobs dependent users UI jobs need
exports.getDotnetJob = (req, res) => {
  return res.json({ data: dotnetPath_read, db: "DotNet" });
};

// Method to locally served React jobs dependent users UI jobs need
exports.getHotJob = (req, res) => {
  return res.json({ data: hotPath_read, db: "HotJOb" });
};

// Method to locally served dependent users UI jobs-details need
exports.getJobDetails = (req, res) => {
  let { job_id, source } = req.body;
  switch (source) {
    case "Reactjs": {
      let jobDetail = reactPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Angular": {
      let jobDetail = angularPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "VueJs": {
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
    case "PHP": {
      let jobDetail = phpPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "DotNet": {
      let jobDetail = dotnetPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "HotJob": {
      let jobDetail = hotPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    default:
      let jobDetail = othersPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
  }
};