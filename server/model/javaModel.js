const mongoose = require("mongoose");

const JavaSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Java", JavaSchema);
