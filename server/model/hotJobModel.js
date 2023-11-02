const mongoose =  require("mongoose");

const HotSchema = mongoose.Schema(
  {
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports =  mongoose.model("hotJobModel", HotSchema);