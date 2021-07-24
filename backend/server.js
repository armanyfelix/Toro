require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cuadroRoutes = require('./routes/cuadroRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/cuadros', cuadroRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
