const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const DB = require("./config/db");
const UserSchema = require("./models/userModels");
const UserLogin = require("./controllers/Login")
const ProductSchema = require("./models/productModel");
const port = 4000;

const SignupPost = require("./controllers/Signup");

// Enable JSON request body parsing
app.use(express.json());

// Enable CORS
app.use(cors());

app.get("/products", async (req, res) => {
    try {
        const data = await ProductSchema.find();
        res.send(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// To Submit the User Details
app.post("/register", SignupPost);



app.get("/login", UserLogin);



app.listen(port, () => {
    console.log(`Server is connected on port: ${port}`);
});
