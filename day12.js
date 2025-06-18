// Task 1
var x = 10;
var b = 20;
console.log(x + b); // Output: 30

// Task 2
let a = prompt("Enter a Tweet: ");
let tot = 140;
let used = a.length;
alert(`You have used: ${used} | Remaining Char: ${tot - used} char`);

// Task 3
const person = {
  name: "Rajesh N",
  age: 20,
  isStudent: true
};
console.log(`My name is ${person.name}. My Age is: ${person.age}. Student: ${person.isStudent}`);

// Task 4
let a1 = 10;
let b1 = 5;
let add = a1 + b1;
let sub = a1 - b1;
let prd = a1 * b1;
let div = a1 / b1;
console.log(`Addition: ${add}\nSubtraction: ${sub}\nMultiplication: ${prd}\nDivision: ${div}`);

// Task 5
function adder(a, b) {
  return a + b;
}
console.log(adder(3, 7)); // Output: 10
 
// Task 6
let num = prompt("Enter a number:"); 
num = parseInt(num); 
if (num % 2 === 0) {
    alert("The number is Even.");
} else {
    alert("The number is Odd.");
}


//Task 7
let p = 1000;
let r = 5;
let t = 2;
let si = (p * r * t) / 100;
console.log("Simple Interest is: " + si);
 
 

