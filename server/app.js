require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// route
const userRouter = require("./routes/userRoute.js");
const reactJobRoute = require("./routes/reactJobRoute.js");
const otherJobRouter = require("./routes/otherJobsRoute.js");

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
app.use("/", userRouter);
app.use("/jobs", reactJobRoute);
app.use("/other", otherJobRouter);

//start server
const port = process.env.PORT || 3005;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server started at http://localhost:${port}/`)
    );
  } catch (error) {
    console.log('Error Occured: ', error);
  }
};

start();