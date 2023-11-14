require("dotenv").config();
const express = require("express");
const cron = require("node-cron");
const cors = require("cors");
const app = express();

// route import
// const fetchJobRoute = require("./routes/jSearchRoute.js");
const techJobRoute = require("./routes/techJobRoute.js");
const { findDaysInterval } = require("./utils/jSearchAPI.js");
const connectDb = require("./config/MongoDb.js");

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
// app.use("/api/jobs/fetchJobs", fetchJobRoute);

// Schedule the data fetch task to run at midnight every two days (0 0 */2 * *)
const task = cron.schedule("40 0 */6 * *", findDaysInterval);
task.start();

// Fetching Environmental variables
const url = process.env.MONGODB_URL;
const port = process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDb(url);
    app.listen(port, () =>
      console.log(`Server started at http://localhost:${port}/api/jobs`)
    );
  } catch (error) {
    console.log("Error Occurred: ", error);
  }
};

start();
