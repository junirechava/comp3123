
// Function from Exercise 2
const capitalize = (word) => {

    const [firstLetter, ...remainingLetters] = word;

    return firstLetter.toUpperCase() +
           remainingLetters.join("");
};

// Exercise 3
const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(
    color => capitalize(color)
);

console.log(capitalizedColors);