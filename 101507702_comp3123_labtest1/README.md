# COMP3123 - Lab Test 1

**Student ID:** 101507702  
**Course:** COMP3123 - Full Stack Development I  
**Lab Test:** 1

## Project Description

This project contains three JavaScript exercises using ES6 and Node.js.

## Question 1 - ES6 Features

File: `question1.js`

Creates a function called `lowerCaseWords()` that filters non-string values from an array and converts the remaining strings to lowercase using Promises.

## Question 2 - Promises

File: `question2.js`

Creates two functions:
- `resolvedPromise()` resolves a message after 500 milliseconds.
- `rejectedPromise()` rejects a message after 500 milliseconds.

Both results are handled and displayed in the console.

## Question 3 - File Module

Files: `add.js` and `remove.js`

- `add.js` creates a Logs directory and generates 10 text files.
- `remove.js` deletes the files and removes the Logs directory.

## How to Run

Make sure Node.js is installed.

Open the terminal inside the project folder and run:

```bash
node question1.js
node question2.js
node add.js
node remove.js
```

## Technologies Used

- JavaScript ES6
- Node.js
- File System (fs)
- Path Module
- Promises