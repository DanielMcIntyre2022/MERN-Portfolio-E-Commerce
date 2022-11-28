const asyncHandler = require('express-async-handler');

const Products = require('../models/productModel');

const getProducts = asyncHandler(async(req, res) => {
    res.json(
        await Products.find().exec()
    )
});

module.exports = getProducts;