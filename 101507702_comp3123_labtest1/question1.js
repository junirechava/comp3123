const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(mixedArray) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {

            if (!Array.isArray(mixedArray)) {
                reject("Input it is not a valid array.");
                return;
            }

            let result = mixedArray.filter(item => typeof item === "string");
            let result2 = result.map(item => item.toLowerCase());  

            resolve(result2);
        }, 1500);
    });
}
lowerCaseWords(123).then(result2 => {
    console.log(result2);
}).catch(error => {
    console.error(error);
});


