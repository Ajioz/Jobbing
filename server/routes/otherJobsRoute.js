const Express = require("express");
const {
  getJobAsync,
}  = require("../controller/otherJobsController.js");

const otherJobRouter = Express.Router();


// Search for jobs
otherJobRouter.get("/jobs", getJobAsync);

module.exports = otherJobRouter;