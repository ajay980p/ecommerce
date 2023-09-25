const mongoose = require('mongoose');
const UserSchema = require("../models/userModels");

const UserLogin = async (req, res) => {

    try {
        if (req.body.email && req.body.password) {

            // Find the user with the provided email
            const user = await UserSchema.findOne({ email: req.body.email });

            if (user) {
                // If a user is found, check the password
                if (user.password === req.body.password) {
                    // Passwords match, send the user data
                    res.send(user);
                } else {
                    // Passwords don't match, send an error message
                    res.status(401).json({ error: "Wrong Password" });
                }
            } else {
                // No user found with the provided email, send an error message
                res.status(404).json({ error: "User not found" });
            }

        } else {
            // Missing email or password in the request, send an error message
            res.status(400).json({ error: "Missing email or password" });
        }
    } catch (err) {
        // Handle other errors and send an error response
        res.status(500).json({ error: err.message });
    }
};


module.exports = UserLogin;
