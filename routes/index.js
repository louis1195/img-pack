const express = require('express');
const { route } = require('../..');
const router = express.Router();

router.use("/api/v1", require("./api"))

module.exports = router;