const mongoose = require('mongoose');
const UserSchema = require("../models/userModels");

const UserLogin = async (req, res) => {
    try {
        // Find all documents in the User collection
        const users = await UserSchema.find();

        // Send the list of users as a JSON response
        res.json(users);
    } catch (err) {
        // Handle errors and send an error response
        res.status(500).json({ error: err.message });
    }
};

module.exports = UserLogin;
