let userName = prompt("Enter your name:");

alert("Hello, " + userName + "! How are you?");

// 2
let firstNum = +prompt("Enter random number:");
let secondNum = +prompt("Enter another random number:");

let addition = firstNum + secondNum;
console.log(addition);

let subtraction = firstNum - secondNum;
console.log(subtraction);

let multiplication = firstNum * secondNum;
console.log(multiplication);

let division = firstNum / secondNum;
console.log(division);

// 3
console.log(firstNum === secondNum);

// 4
let thirdNum = +prompt("Enter one more random number:");
let avarage = (firstNum + secondNum + thirdNum) / 3;
console.log(avarage);

// 5
let fiveDigitNum = +prompt("Enter five-digit number:");
console.log(fiveDigitNum);

let digit5 = fiveDigitNum % 10;

let digit4 = Math.floor((fiveDigitNum / 10) % 10);

let digit3 = Math.floor((fiveDigitNum / 100) % 10);

let digit2 = Math.floor((fiveDigitNum / 1000) % 10);

let digit1 = Math.floor((fiveDigitNum / 10000) % 10);

console.log(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);