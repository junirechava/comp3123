
const numbers = [1, 2, 3, 4];

// Calculate sum
const calculateSum = numbers.reduce(
    (total, number) => total + number,
    0
);

// Calculate product
const calculateProduct = numbers.reduce(
    (total, number) => total * number,
    1
);

console.log(calculateSum);
console.log(calculateProduct);