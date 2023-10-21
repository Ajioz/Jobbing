const Express = require("express");
const { fetchJobs } = require("../utils/jSearchAPI");


const fetchJobRoute = Express.Router();


// Search for jobs
fetchJobRoute.get("/", fetchJobs);

module.exports = fetchJobRoute;