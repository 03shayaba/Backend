const express = require("express");
const router = express.Router();
const contactForm = require("../Controllers/contact-controller")
router.route("/Contact").post(contactForm);

module.exports = router;