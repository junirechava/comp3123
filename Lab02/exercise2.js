
const capitalize = (word) => {

    const [firstLetter, ...remainingLetters] = word;

    return firstLetter.toUpperCase() +
           remainingLetters.join("");
};

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));