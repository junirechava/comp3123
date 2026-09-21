
const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Hello World!</h1>");
});

// Start server on port 8088
server.listen(8088, () => {
    console.log("Server running at http://localhost:8088");
});


// Example 1: Traditional function
function add(a, b) {
    let result = a + 10;
    return result + b;
}


// Example 2: Function expression
let hello = function(a, b) {
    let result = a + 10;
    return result + b;
};


// Example 3: Arrow function
hello = (a, b) => {
    let result = a + 10;
    return result + b;
};


// Execute functions
console.log("Traditional function:", add(12, 80));
console.log("Arrow function:", hello(12, 80));