const Cuadro = require('../models/cuadro');

const getAllCuadros = async (req, res) => {
    try {
        const cuadros = await Cuadro.find({});
        res.json(cuadros);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getCuadroById = async (req, res) => {
    try {
        const cuadro = await Cuadro.findById(req.params.id);
        res.json(cuadro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllCuadros,
    getCuadroById,
};