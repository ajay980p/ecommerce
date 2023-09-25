const express = require('express')
const ProductSchema = require("../models/productModel")

const ProductsData = async (req, res) => {
    try {
        const response = ProductSchema.find();
        res.send(response);
    } catch (err) {
        res.send(err);
    }
}

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