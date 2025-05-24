const express = require('express');
const router = express.Router();
const { getQuote } = require('../Controller/controller.js');

router.get('/', getQuote);

module.exports = router;
