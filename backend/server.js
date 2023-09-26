const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const DB = require("./config/db");
const UserSchema = require("./models/userModels");
const UserLogin = require("./controllers/Login")
const ProductSchema = require("./models/productModel");
const { ProductsData, ProductDataWithID } = require("./controllers/ProductsData")
const port = 4000;

const SignupPost = require("./controllers/Signup");

// Enable JSON request body parsing
app.use(express.json());

// Enable CORS
app.use(cors());


// To Submit the User Details
app.post("/register", SignupPost);


// User LOGIN
app.post("/login", UserLogin);


// Get Products
app.get("/products", ProductsData);


// Get Product With ID
app.get("/product/:id", ProductDataWithID)



app.listen(port, () => {
    console.log(`Server is connected on port: ${port}`);
});
