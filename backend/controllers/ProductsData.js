const express = require('express')
const ProductSchema = require("../models/productModel")

const ProductsData = async (req, res) => {
    try {
        let { category, minPrice, maxPrice } = req.query;

        let query = {}

        if (category) {
            query.category = category;
        }

        if (minPrice && maxPrice) {
            minPrice = parseInt(minPrice, 10)
            maxPrice = parseInt(maxPrice, 10)
            query.price = { $gte: minPrice, $lte: maxPrice };
        } else if (minPrice) {
            minPrice = parseInt(minPrice, 10)
            query.price = { $gte: minPrice };
        } else if (maxPrice) {
            maxPrice = parseInt(maxPrice, 10)
            query.price = { $lte: maxPrice };
        }

        const response = await ProductSchema.find(query);
        res.send(response);

    } catch (err) {
        res.status(500).send(err);
    }
};


const ProductDataWithID = async (req, res) => {

    const ProductID = req.params.id;

    try {
        const response = await ProductSchema.findOne({ _id: ProductID });
        res.send(response)
    }
    catch (err) {
        res.send(err)
    }
}

module.exports = { ProductsData, ProductDataWithID };