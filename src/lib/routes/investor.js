//For admins
const express = require('express');

const router = express.Router();

const investorController = require('../controllers/investor')

router.get("/", investorController.getAllInvestors);
router.post("/create", investorController.addNewInvestor);

module.exports = router;