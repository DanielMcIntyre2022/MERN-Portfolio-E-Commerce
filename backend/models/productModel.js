const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    inStock: {
        type: Boolean
    }
});

module.exports = mongoose.model('products', productModel);
