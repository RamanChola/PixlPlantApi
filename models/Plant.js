const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    default: ""
  },
  lifeCycle: {
    type: String,
    default: ""
  },
  sunRequirements: {
    type: String,
    default: ""
  },
  waterPreferences: {
    type: String,
    default: ""
  },
  soilpHPreferences: {
    type: String,
    default: ""
  },
  plantHeight: {
    type: String,
    default: ""
  },
  plantSpread: {
    type: String,
    default: ""
  },
  fruit: {
    type: String,
    default: ""
  },
  flowers: {
    type: String,
    default: ""
  },
  uses: {
    type: String,
    default: ""
  },
  edibleParts: {
    type: String,
    default: ""
  },
  pixelImage: {
    type: String,
    default: ""
  },
  fullImage: {
    type: String,
    default: ""
  },
  

});
module.exports = mongoose.model("Plant",plantSchema);

