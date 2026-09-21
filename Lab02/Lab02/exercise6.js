
// Parent class
class Car {

    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// Child class
class Sedan extends Car {

    constructor(model, year, balance) {

        super(model, year);

        this.balance = balance;
    }

    display() {

        super.display();

        console.log(`Balance: ${this.balance}`);
    }
}

// Create Sedan object
const myCar = new Sedan(
    "Toyota Camry",
    2024,
    15000
);

// Display car information
myCar.display();