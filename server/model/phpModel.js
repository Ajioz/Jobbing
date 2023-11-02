const mongoose = require("mongoose");


const PhPSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PHP", PhPSchema);