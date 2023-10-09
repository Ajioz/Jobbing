const Express = require("express");
const {
  getReactJobAsync,
  getReactJobDetails,
} = require("../controller/reactJobController.js");

const reactJobRoute = Express.Router();

// Search for jobs
reactJobRoute.get("/search", getReactJobAsync);

// search for job details
reactJobRoute.post("/job-details", getReactJobDetails);

module.exports = reactJobRoute;