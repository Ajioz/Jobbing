const mongoose = require("mongoose");

const goSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("GoLang", goSchema);