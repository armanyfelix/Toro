require('dotenv').config();
const express = require('express');
const stripe = require('stripe');
const cors = require('cors');
const shippingRoutes = require('./routes/shippingRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/checkout", shippingRoutes)


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => console.log(`stripe running on port ${PORT}`))

