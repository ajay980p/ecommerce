const mongoose = require('mongoose')
const DB = require("../config/db")
const UserSchema = require("../models/userModels")

const SignupPost = async (req, res) => {
    try {
        const user = new UserSchema(req.body);

        const data = await user.save();

        // Send a success response back to the client
        res.status(200).json({ message: 'User registered successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while saving the user.' });
    }
}

module.exports = SignupPost;
