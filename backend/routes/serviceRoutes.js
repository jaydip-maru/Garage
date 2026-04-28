const express = require("express");
const router = express.Router();
const controller = require("../controllers/serviceController");
const {userVerification} = require("../middleware/AuthMiddleware.js");


router.get("/services/:id", controller.getServices);
router.post("/verify", userVerification);

module.exports = router;