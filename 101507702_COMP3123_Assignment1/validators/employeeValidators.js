const { body, param, query } = require("express-validator");

const createEmployeeValidator = [
    body("first_name").trim().notEmpty().withMessage("First name is required"),
    body("last_name").trim().notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("position").trim().notEmpty().withMessage("Position is required"),
    body("salary")
        .isFloat({ min: 0 })
        .withMessage("Salary must be a positive number"),
    body("date_of_joining")
        .isISO8601()
        .withMessage("Valid joining date is required"),
    body("department").trim().notEmpty().withMessage("Department is required")
];

const updateEmployeeValidator = [
    body("email")
        .optional()
        .isEmail()
        .withMessage("Valid email is required"),
    body("salary")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Salary must be a positive number"),
    body("date_of_joining")
        .optional()
        .isISO8601()
        .withMessage("Valid joining date is required")
];

const employeeIdValidator = [
    param("eid")
        .isMongoId()
        .withMessage("Invalid employee ID")
];

const employeeQueryIdValidator = [
    query("eid")
        .isMongoId()
        .withMessage("Invalid employee ID")
];

module.exports = {
    createEmployeeValidator,
    updateEmployeeValidator,
    employeeIdValidator,
    employeeQueryIdValidator
};