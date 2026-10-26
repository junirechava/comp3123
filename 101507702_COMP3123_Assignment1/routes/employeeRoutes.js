const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const validateRequest = require("../middleware/validationMiddleware");

const {
    createEmployeeValidator,
    updateEmployeeValidator,
    employeeIdValidator,
    employeeQueryIdValidator
} = require("../validators/employeeValidators");

const {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

const router = express.Router();

router.use(authMiddleware);

router.get("/employees", getEmployees);

router.post(
    "/employees",
    createEmployeeValidator,
    validateRequest,
    createEmployee
);

router.get(
    "/employees/:eid",
    employeeIdValidator,
    validateRequest,
    getEmployeeById
);

router.put(
    "/employees/:eid",
    employeeIdValidator,
    updateEmployeeValidator,
    validateRequest,
    updateEmployee
);

router.delete(
    "/employees",
    employeeQueryIdValidator,
    validateRequest,
    deleteEmployee
);

module.exports = router;