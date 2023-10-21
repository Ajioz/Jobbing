const Express = require("express");
const {
  getReactJob,
  getAngularJob,
  getVueJob,
  getNodeJob,
  getPythonJob,
  getJavaJob,
  getGolangJob,
  getPhpJob,
  getDotnetJob,
  getOtherJob,
  getJobDetails,
  getHotJob,
} = require("../controller/techJobController.js");

const techJobRoute = Express.Router();

// Search for jobs
techJobRoute.get("/Other", getOtherJob);
techJobRoute.get("/Reactjs", getReactJob);
techJobRoute.get("/Angular", getAngularJob);
techJobRoute.get("/VueJs", getVueJob);
techJobRoute.get("/Nodejs", getNodeJob);
techJobRoute.get("/Python", getPythonJob);
techJobRoute.get("/Java", getJavaJob);
techJobRoute.get("/GoLang", getGolangJob);
techJobRoute.get("/PHP", getPhpJob);
techJobRoute.get("/DotNet", getDotnetJob);
techJobRoute.get("/HotJob", getHotJob);

// search for job details
techJobRoute.post("/job-details", getJobDetails);

module.exports = techJobRoute;