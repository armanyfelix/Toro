const mongoose = require('mongoose');

const cuadroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    size: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const cuadro = mongoose.model('cuadro', cuadroSchema);

module.exports = cuadro;