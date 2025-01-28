let firstNum = +prompt('Enter random numder:');

let secondNum = +prompt('Enter another random numder:');

// 1
if (firstNum > secondNum) {
    console.log(`${firstNum} is bigger number`)
} else if (firstNum < secondNum) {
    console.log(`${secondNum} is bigger number`)
} else {
    console.log(`numbers are the same`)
}


// 2
let kilometres = firstNum;
let feet = secondNum * 0.305 / 1000;

let kmOrFeet = kilometres > feet ?
    console.log(`${firstNum} km is bigger than ${secondNum} ft`) 
    : console.log(`${secondNum} ft is bigger than ${firstNum} km`);


// 3
if (firstNum % secondNum === 0) {
    console.log(`${firstNum} is divisible by ${secondNum}, \n but ${secondNum} is not divisible by ${firstNum}`)
} else if (secondNum % firstNum === 0) {
    console.log(`${firstNum} is not divisible by ${secondNum}, \n but ${secondNum} is divisible by ${firstNum}`)
} else {
    console.log('either number is not divisible by the other one');
}

// 4
let lastDigit = firstNum % 10;
let isEven = (firstNum % 2 === 0) ?
    console.log(`${lastDigit} is even`)
    : console.log(`${lastDigit} is not even`);

// 5
let twoDigitNum = prompt('Enter two-digit numder:');

let firstDigit = Math.floor(twoDigitNum / 10);
let secondDigit = twoDigitNum % 10;

if (firstDigit > secondDigit) {
    console.log('first digit is bigger')
} else if (firstDigit < secondDigit) {
    console.log('second digit is bigger');
} else {
    console.log('digits are the same');
}

// 6
let threeDigitNum = prompt('Enter three-digit numder:');

let digit1 = Math.floor(threeDigitNum / 100);
let digit2 = Math.floor(threeDigitNum / 10) % 10;
let digit3 = threeDigitNum % 10;

let isSumEven = (digit1 + digit2 + digit3) % 2 === 0 ?
    console.log('sum of digits is even') : console.log('sum of digits is odd');

let isMultiple = (digit1 + digit2 + digit3) % 5 === 0 ?
    console.log('sum of digits is a multiple of five') 
    : console.log('sum of digits is not a multiple of five');

let isProductBigger = (digit1 * digit2 * digit3) > 100 ?
    console.log('product of digits is bigger than 100')
    : console.log('product of digits is not bigger than 100');

// 7 
let areTheSame = (digit1 === digit2 && digit2 === digit3) ? 
    console.log('all digits are the same')
    : console.log('digits are not the same');

let someNumsSame = (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) ? 
    console.log('some digits are the same')
    : console.log('digits are not the same');

// 8
let sixDigitNum = prompt('Enter six-digit numder:');;
let isPalindrome = sixDigitNum.split("").reverse().join("") === sixDigitNum ?
    console.log(`${sixDigitNum} is palindrome`) 
    : console.log(`${sixDigitNum} is not palindrome`);