const mongoose = require("mongoose");

const PythonSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Python", PythonSchema);
