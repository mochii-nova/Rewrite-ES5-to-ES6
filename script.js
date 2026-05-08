const labTitle = "ES6 Modernization";
let studentStatus = "In Progress";

console.log("--- Step 2: Variables ---");
console.log(labTitle, "-", studentStatus);

const add = (a, b) => a + b;

const doubleNumber = num => num * 2;

console.log("\n--- Step 3: Arrow Functions ---");
console.log("Sum (5 + 10):", add(5, 10));
console.log("Double 25:", doubleNumber(25));

const user = "Alex";
const score = 95;

const resultMessage = `Student ${user} scored ${score} points in ${labTitle}.`;

console.log("\n--- Step 4: Template Literals ---");
console.log(resultMessage);

const greet = (name = "Guest") => `Welcome, ${name}!`;

console.log("\n--- Step 5.1: Default Parameters ---");
console.log(greet()); // Uses "Guest"
console.log(greet("Sam")); // Uses "Sam"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    country: "USA"
};

const { firstName, country } = person;

const colors = ["Red", "Green", "Blue"];
const [primaryColor, secondaryColor] = colors;

console.log("\n--- Step 5.2: Destructuring ---");
console.log(`${firstName} lives in ${country}.`);
console.log(`Colors selected: ${primaryColor} and ${secondaryColor}`);

const originalArray = [1, 2, 3];
const extendedArray = [...originalArray, 4, 5, 6]; // Copy and add elements

const baseSettings = { theme: "dark", notifications: true };
const userSettings = { ...baseSettings, showAvatar: true }; // Merge objects

console.log("\n--- Step 5.3: Spread Operator ---");
console.log("Extended Array:", extendedArray);
console.log("Merged Settings:", userSettings);

console.log("\n--- Lab Converted Successfully ---");