const express = require("express");
const router = express.Router();
const controller = require("../controllers/otpController");


router.post("/verifyOtp", controller.verifyOtp);
router.post("/resendOtp", controller.resendOtp);



module.exports = router;