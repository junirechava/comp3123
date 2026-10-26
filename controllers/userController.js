const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// ==============================
// SIGNUP
// ==============================

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return res.status(409).json({
                error: "Username already exists"
            });
        }

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                error: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                created_at: user.created_at
            }
        });

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


// ==============================
// LOGIN
// ==============================

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let user;

        if (username) {
            user = await User.findOne({ username });
        } else if (email) {
            user = await User.findOne({ email });
        } else {
            return res.status(400).json({
                error: "Username or email is required"
            });
        }

        if (!user) {
            return res.status(401).json({
                error: "Invalid credentials"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                error: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


// Export at the END
module.exports = {
    signup,
    login
};