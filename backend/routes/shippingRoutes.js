const express = require('express');
const router = express.Router();

const { getShipping } = require('../controllers/shippingController');

router.get('/', getShipping);

module.exports = router;
