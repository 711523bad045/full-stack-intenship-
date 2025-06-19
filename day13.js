//Task1
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log("Third fruit:", fruits[2]);
fruits.push("Pineapple");
console.log("After push:", fruits);
fruits.shift();
console.log("After shift:", fruits);
console.log("Length of array:", fruits.length);
console.log("Fruits list:");
for (let fruit of fruits) {
    console.log(fruit);
}
fruits.reverse();
console.log("Reversed array:", fruits);
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum of numbers:", sum);


//Task2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log("Merged Array:", merged);

let fruit = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.splice(2, 2); 
console.log("After Splice:", fruit);

let num = [40, 10, 100, 20];
numbers.sort((a, b) => a - b); 
console.log("Sorted Numbers:", num);

let colors = ["red", "blue", "green"];
console.log("Includes 'blue':", colors.includes("blue")); 

let animals = ["dog", "cat", "lion"];
console.log("Index of 'cat':", animals.indexOf("cat")); 

// Task3
let arr = [1, 2, 3];
let ar = [4, 5, 6];

let mergedArray = arr.concat(arr);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//-------------------

let arr4 = [1, 2, 3, 4, 5, 6];
let indexToRemove = 2;

arr4.splice(indexToRemove, 2); // 3 4
console.log(arr4); // Output: [1, 2, 5, 6]

//-------------------

let arr5 = [5, 2, 8, 1, 9];
arr5.sort((a, b) => a - b);
console.log(arr5); // Output: [1, 2, 5, 8, 9]

//--------------------

let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.includes(3)); // Output: true
console.log(arr6.includes(6)); // Output: false

//-------------

let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.indexOf(3)); 

//Task4
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function right(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
 }
 function left(){
    turnLeft();
      move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
function main(){
   //your code here
   right();
   left();
   right();
   left();
   right();
}
   
//TAsk5
let weight = 65;
let height = 1.56;
let bmi = Math.round(weight / (height * height));
console.log("Your BMI is: " + bmi);

//Task6
let w=52;
let h=1.65;
function main(w,h) {
    let ans=Math.round(w/(h*h));
    if (ans>=18.7) {
        console.log("normal");
    } else {
        console.log("high");
    }
}
main(w,h);


//Task 7
var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
console.log(n);


//Task8
function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n); 
}
let result = fibonacci(10);
console.log(result);

//Task9
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));








