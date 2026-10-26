const { body } = require("express-validator");


// ==============================
// SIGNUP VALIDATION
// ==============================

const signupValidator = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3 })
        .withMessage("Username must be at least 3 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email must be valid"),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
];


// ==============================
// LOGIN VALIDATION
// ==============================

const loginValidator = [
    body("password")
        .notEmpty()
        .withMessage("Password is required")
];


// Export at the END
module.exports = {
    signupValidator,
    loginValidator
};