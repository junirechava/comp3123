const Employee = require("../models/Employee");


// CREATE EMPLOYEE
const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create({
            ...req.body,
            user: req.user.id
        });

        res.status(201).json({
            message: "Employee created successfully",
            employee
        });

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


// GET ALL EMPLOYEES FOR LOGGED USER
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({
            user: req.user.id
        });

        res.status(200).json(employees);

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


// GET ONE EMPLOYEE
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            _id: req.params.eid,
            user: req.user.id
        });

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        }

        res.status(200).json(employee);

    } catch (error) {
        res.status(400).json({
            error: "Invalid employee ID"
        });
    }
};


// UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndUpdate(
            {
                _id: req.params.eid,
                user: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee updated successfully",
            employee
        });

    } catch (error) {
        res.status(400).json({
            error: "Unable to update employee"
        });
    }
};


// DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({
            _id: req.query.eid,
            user: req.user.id
        });

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        }

        res.status(204).send();

    } catch (error) {
        res.status(400).json({
            error: "Unable to delete employee"
        });
    }
};


module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};