require("dotenv").config();
const express = require("express");
// const cron = require("node-cron");
const cors = require("cors");
const app = express();

// route import
const techJobRoute = require("./routes/techJobRoute.js");
const fetchJobRoute = require("./routes/jSearchRoute.js");
// const { fetchJobs } = require("./utils/jSearchAPI.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

// custom middleware
app.use("/api/jobs", techJobRoute);
app.use("/api/jobs/fetchJobs", fetchJobRoute);

// Schedule the data fetch task to run at midnight every two days (0 0 */2 * *)
// const task = cron.schedule("0 0 */2 * *", fetchJobs);
// task.start();

//start server
const port = process.env.PORT || 3005;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server started at http://localhost:${port}/api/jobs`)
    );
  } catch (error) {
    console.log("Error Occurred: ", error);
  }
};

start();
