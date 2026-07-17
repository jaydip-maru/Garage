const express = require("express");
const router = express.Router();

const controller = require("../controllers/garageController");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", controller.getAllGarage);
router.post("/", upload.single("url"), controller.createGarage);
router.get("/:id", controller.getGarageById);
router.delete("/delete/:id", controller.deleteGarage);

module.exports = router;