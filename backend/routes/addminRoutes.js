const express = require("express");
const router = express.Router();
const controller = require("../controllers/addminController");

router.get("/", controller.getAllGarage);





module.exports = router;