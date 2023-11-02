const mongoose = require("mongoose");

const dotNetSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DotNet", dotNetSchema);
