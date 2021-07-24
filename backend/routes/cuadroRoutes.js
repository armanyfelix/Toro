const express = require('express');
const router = express.Router();

const { getAllCuadros, getCuadroById } = require('../controllers/cuadroControllers');

//@desc GEt all cuadros from db
//@route GET /api/cuadros
//@access Public
router.get('/', (req, res) => getAllCuadros);

//@desc GEt a cuadro by id from db
//@route GET /api/cuadros:id
//@access Public
router.get('/:id', (req, res) => getCuadroById);

module.exports = router;
