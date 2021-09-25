var express = require('express')
var router = express.Router()
const plantsController = require("../controllers/plants-controller")

router.get("/",plantsController.getPlants)
router.get("/:name", plantsController.getPlantByName)
router.post("/addplant",plantsController.addplant)
module.exports = router;