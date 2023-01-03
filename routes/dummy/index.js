const express = require('express');
const router = express.Router();

const dummyController = require("../../controllers/dummy/dummyController");

router.post("/dummy", dummyController.dummyEndpoint);

module.exports = router;