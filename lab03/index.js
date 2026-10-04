const http = require("http");
const employees = require("./Employee");

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8081;

const server = http.createServer((req, res) => {

    // Only GET requests allowed
    if (req.method !== "GET") {
        res.writeHead(405, {
            "Content-Type": "application/json"
        });

        return res.end(
            JSON.stringify({
                error: http.STATUS_CODES[405]
            })
        );
    }

    // Home
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        return res.end(
            "<h1>Welcome to Lab Exercise 03</h1>"
        );
    }

    // All employees
    if (req.url === "/employee") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        return res.end(
            JSON.stringify(employees)
        );
    }

    // Employee names sorted ascending
    if (req.url === "/employee/names") {

        const names = employees
            .map(employee =>
                `${employee.firstName} ${employee.lastName}`
            )
            .sort();

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        return res.end(
            JSON.stringify(names)
        );
    }

    // Total salary
    if (req.url === "/employee/totalsalary") {

        const totalSalary = employees.reduce(
            (total, employee) =>
                total + employee.Salary,
            0
        );

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        return res.end(
            JSON.stringify({
                total_salary: totalSalary
            })
        );
    }

    // 404
    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(
        JSON.stringify({
            error: http.STATUS_CODES[404]
        })
    );
});

server.listen(port, () => {
    console.log(
        `Server listening on http://localhost:${port}`
    );
});