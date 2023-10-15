require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// route
const techJobRoute = require("./routes/techJobRoute.js");
const { timerFunc } = require("./utils/jSearchAPI.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

// custom middleware
app.use(timerFunc);
app.use("/jobs/search", techJobRoute);

//start server
const port = process.env.PORT || 3005;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server started at http://localhost:${port}/`)
    );
  } catch (error) {
    console.log('Error Occurred: ', error);
  }
};

start();