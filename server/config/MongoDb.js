const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDb = async (url) => {
  try {
    console.log("Successful")
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return "Something not right with the database";
  }
};

module.exports = connectDb;