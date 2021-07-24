require('dotenv').config();
const cuadrosData = require('./data/cuadros');
const connectDB = require('./config/db');
const Cuadro = require('./models/cuadro');


connectDB();

const importData = async () => {
    try {
        await Cuadro.deleteMany({});
        await Cuadro.insertMany(cuadrosData);

        console.log('Data Import Success');
        process.exit();
    } catch (error) {
        console.error('Error with data import');
        process.exit(1);
    }
};

importData();

