const express = require("express");
const {handleGenerateNewShortURL, handleGetAnalysis} = require("../Controllers/url.js")
const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId' , handleGetAnalysis)

module.exports = router;
