const express = require('express');

const router = express.Router();

const {getAllIplData} = require('../controllers/ipl_data');

router.get("/",getAllIplData);

module.exports = router;