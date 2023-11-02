const mongoose = require("mongoose");

const AngularSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Angular", AngularSchema);
