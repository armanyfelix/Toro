const shippingData = require('../../frontend/src/components/Checkout/AddressForm')

const getShipping = async (req, res) => {
    try {
        const shipping = await shippingData.find({});
        res.json(shipping);
        console.log('get Checkout currectly');
    } catch (error) {
        res.status(500).json({ message: "Server Error: Cant get Address" });
    }
};

module.exports = {
    getShipping
};