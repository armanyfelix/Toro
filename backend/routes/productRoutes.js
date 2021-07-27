const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controllers/productControllers');

//@desc GEt all products from db
//@route GET /api/products
//@access Public
router.get('/', (req, res) => getAllProducts);

//@desc GEt a product by id from db
//@route GET /api/products:id
//@access Public
router.get('/:id', (req, res) => getProductById);

module.exports = router;
