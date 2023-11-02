//This is how to import a json file for reading it
const React = require("../model/reactModel.js");
const Angular = require("../model/angularModel.js");
const Vue = require("../model/vueModel.js");
const Node = require("../model/nodeModel.js");
const Python = require("../model/pythonModel.js");
const Java = require("../model/javaModel.js");
const GoLang = require("../model/goLangModel.js");
const PHP = require("../model/phpModel.js");
const DotNet = require("../model/dotNetModel.js");
const Other = require("../model/otherModel.js");
const HotJOb = require("../model/hotJobModel.js");

// get other Job Data
exports.getOtherJob = async (req, res) => {
  try {
    const others = await Other.find({});
    return res.status(200).json({ data: others[0].data.data, db: "Other" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getReactJob = async (req, res) => {
  try {
    const reactJobs = await React.find({});
    return res
      .status(200)
      .json({ data: reactJobs[0].data.data, db: "Reactjs" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getAngularJob = async (req, res) => {
  try {
    const angular = await Angular.find({});
    return res.json({ data: angular[0].data.data, db: "Angular" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getVueJob = async (req, res) => {
  try {
    const vue = await Vue.find({});
    return res.json({ data: vue[0].data.data, db: "VueJs" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getNodeJob = async (req, res) => {
  try {
    const node = await Node.find({});
    return res.json({ data: node[0].data.data, db: "Nodejs" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getPythonJob = async (req, res) => {
  try {
    const python = await Python.find({});
    return res.json({ data: python[0].data.data, db: "Python" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getJavaJob = async (req, res) => {
  try {
    const java = await Java.find({});
    return res.json({ data: java[0].data.data, db: "Java" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getGolangJob = async (req, res) => {
  try {
    const golang = await GoLang.find({});
    return res.json({ data: golang[0].data.data, db: "GoLang" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getPhpJob = async (req, res) => {
  try {
    const php = await PHP.find({});
    return res.json({ data: php[0].data.data, db: "PHP" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getDotnetJob = async (req, res) => {
  try {
    const dotnet = await DotNet.find({});
    return res.json({ data: dotnet[0].data.data, db: "DotNet" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served React jobs dependent users UI jobs need
exports.getHotJob = async (req, res) => {
  try {
    const hotjob = await HotJOb.find({});
    return res.json({ data: hotjob[0].data.data, db: "HotJOb" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ Message: "Couldn't process your request!" });
  }
};

// Method to locally served dependent users UI jobs-details need
exports.getJobDetails = async (req, res) => {
  let { job_id, source } = req.body;
  switch (source) {
    case "Reactjs": {
      const react = await React.find({});
      let = reactPath_read = react[0].data.data;
      let jobDetail = reactPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Angular": {
      const angular = await Angular.find({});
      let angularPath_read = angular[0].data.data;
      let jobDetail = angularPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "VueJs": {
      const vue = await Vue.find({});
      let vuePath_read = vue[0].data.data;
      let jobDetail = vuePath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Nodejs": {
      const node = await Node.find({});
      let nodejsPath_read = node[0].data.data;
      let jobDetail = nodejsPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Python": {
      const python = await Python.find({});
      let pythonPath_read = python[0].data.data;
      let jobDetail = pythonPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "Java": {
      const java = await Java.find({});
      let javaPath_read = java[0].data.data;
      let jobDetail = javaPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "GoLang": {
      const golang = await GoLang.find({});
      let golangPath_read = golang[0].data.data;
      let jobDetail = golangPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "PHP": {
      const php = await PHP.find({});
      let phpPath_read = php[0].data.data;
      let jobDetail = phpPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "DotNet": {
      const dotnet = await DotNet.find({});
      let dotnetPath_read = dotnet[0].data.data;
      let jobDetail = dotnetPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    case "HotJob": {
      const hotjob = await HotJOb.find({});
      let hotPath_read = hotjob[0].data.data;
      let jobDetail = hotPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
    }
    default:
      const other = await Other.find({});
      let othersPath_read = other[0].data.data;
      let jobDetail = othersPath_read.filter((job) => job.job_id === job_id);
      return res.send(jobDetail);
  }
};
