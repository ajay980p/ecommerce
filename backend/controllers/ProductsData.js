const express = require('express')
const ProductSchema = require("../models/productModel")

const ProductsData = async (req, res) => {
    try {

        let { category } = req.query;

        let query = {}

        if (category) {
            query.category = category;
        }

        // if (minPrice) {
        //     query.price = { $gte: minPrice };
        // }

        // if (maxPrice) {
        //     query.price = { $lte: maxPrice };
        // }

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