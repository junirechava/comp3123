const express = require("express");

const {
    signup,
    login
} = require("../controllers/userController");

const {
    signupValidator,
    loginValidator
} = require("../validators/userValidators");

const validateRequest = require("../middleware/validationMiddleware");
const authLimiter = require("../middleware/rateLimiter");

const router = express.Router();

router.post(
    "/signup",
    authLimiter,
    signupValidator,
    validateRequest,
    signup
);

router.post(
    "/login",
    authLimiter,
    loginValidator,
    validateRequest,
    login
);

module.exports = router;