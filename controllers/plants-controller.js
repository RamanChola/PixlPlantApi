const Plant = require("../models/Plant.js");

const getPlants = async (req, res, next) => {
  let plants;
  try {
    plants = await Plant.find({});
  } catch (error) {
    res.status(500).json("Fetching plants failed, please try again later!.");
  }
  res.json({
    plants: plants.map((plant) => plant.toObject({ getters: true })),
  });
};

const getPlantByName = async (req, res, next) => {
  let plant;
  if (
    req.params.name === "Sunflower" ||
    "Lily" ||
    "Croton" ||
    "Corn Plant" ||
    "Moth Orchid" ||
    "Golden Pothos"
  ) {
    try {
      plant = await Plant.findOne({ name: req.params.name });
    } catch (error) {
      res.status(404).json("Could not find plant!");
    }
    res.status(200).json(plant);
  } else {
    res.send(null);
  }
};

const addplant = async (req, res, next) => {
  const {
    name,
    lifeCycle,
    sunRequirements,
    waterPreferences,
    soilpHPreferences,
    plantHeight,
    plantSpread,
    fruit,
    flowers,
    uses,
    edibleParts,
    pixelImage,
    fullImage,
  } = req.body;
  const createdPlant = new Plant({
    name,
    lifeCycle,
    sunRequirements,
    waterPreferences,
    soilpHPreferences,
    plantHeight,
    plantSpread,
    fruit,
    flowers,
    uses,
    edibleParts,
    pixelImage,
    fullImage,
  });
  try {
    await createdPlant.save();
    res.json({ createdPlant });
  } catch (error) {
    res.send("Could not add the plant");
  }
};

exports.getPlants = getPlants;
exports.getPlantByName = getPlantByName;
exports.addplant = addplant;
