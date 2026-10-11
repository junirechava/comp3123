const express = require('express');
const path = require('path');
const fs = require('fs');

const routerUser = express.Router();

const userFilePath = path.join(__dirname, '..', 'user.json');

// GET /profile
routerUser.get('/profile', (req, res, next) => {
    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return next(err);
        }

        const user = JSON.parse(data);
        res.json(user);
    });
});

// POST /login
routerUser.post('/login', (req, res, next) => {
    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return next(err);
        }

        const user = JSON.parse(data);

        const { username, password } = req.body;

        if (username !== user.username) {
            return res.json({
                status: false,
                message: "User Name is invalid"
            });
        }

        if (password !== user.password) {
            return res.json({
                status: false,
                message: "Password is invalid"
            });
        }

        res.json({
            status: true,
            message: "User Is valid"
        });
    });
});

// GET /logout/:username
routerUser.get('/logout/:username', (req, res) => {
    const { username } = req.params;

    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;