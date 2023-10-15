const Express = require("express");
const {
  getReactJobAsync,
  getAngularJob,
  getVueJob,
  getNodeJob,
  getPythonJob,
  getJavaJob,
  getGolangJob,
  getPhpJob,
  getDotnetJob,
  getJobAsync,
  getJobDetails,
} = require("../controller/techJobController.js");

const reactJobRoute = Express.Router();

// Search for jobs
reactJobRoute.get("/react", getReactJobAsync);
reactJobRoute.get("/angular", getAngularJob);
reactJobRoute.get("/vue", getVueJob);
reactJobRoute.get("/node", getNodeJob);
reactJobRoute.get("/python", getPythonJob);
reactJobRoute.get("/java", getJavaJob);
reactJobRoute.get("/golang", getGolangJob);
reactJobRoute.get("/php", getPhpJob);
reactJobRoute.get("/dotnet", getDotnetJob);
reactJobRoute.get("/others", getJobAsync);

// search for job details
reactJobRoute.post("/job-details", getJobDetails);

module.exports = reactJobRoute;