require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const {
    notFound,
    errorHandler
} = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Console logging
app.use(morgan("dev"));

// File logging
const logsDirectory = path.join(__dirname, "logs");

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

const accessLogStream = fs.createWriteStream(
    path.join(logsDirectory, "app.log"),
    { flags: "a" }
);

app.use(morgan("combined", {
    stream: accessLogStream
}));

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/emp", employeeRoutes);

// Health
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "API is running"
    });
});

// Home
app.get("/", (req, res) => {
    res.status(200).json({
        message: "COMP3123 Assignment 1 API"
    });
});

// Error handlers MUST be last
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;