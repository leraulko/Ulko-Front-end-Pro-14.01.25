// Створити масив, довжину та елементи якого задає користувач.

let userArray = [];

let userNumbers = prompt("Enter some random numbers through a 'space':");
userArray = userNumbers.split(' ').map(Number);
console.log(userArray);

// Потім відсортувати масив за зростанням.

userArray.sort(function (a, b) {
    return a - b
});
console.log(userArray);

// Потім видалити елементи з масиву з 2 по 4 (включно).

let deleteSome = userArray.splice(1, 3);
console.log(userArray);


///
const givenArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.

let sumOfPositives = 0;
let count = 0;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] > 0) {
        sumOfPositives += givenArray[i];
        count++;
    }
}
console.log(sumOfPositives, count);


// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.

let minNum = givenArray[0];
let maxNum = givenArray[0];

for (let i = 0; i < givenArray.length; i++) {  
    if (givenArray[i] < minNum) {
        minNum = givenArray[i];
    }

    if (givenArray[i] > maxNum) {
        maxNum = givenArray[i];
    }
}

let minIndex = givenArray.indexOf(minNum);
let maxIndex = givenArray.indexOf(maxNum);

console.log(minNum, minIndex);
console.log(maxNum, maxIndex);


// Визначити кількість негативних елементів.

let negativesCount = 0;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] < 0) {
        negativesCount++;
    }
}
console.log(negativesCount);


// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти суму парних позитивних елементів.

let oddPositivesCount = 0;
let evenPositivesCount = 0;

let sumOddPositives = 0;
let sumEvenPositives = 0;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] % 2 !== 0 && givenArray[i] > 0) {
        oddPositivesCount++;
        sumOddPositives += givenArray[i];
    }

    if (givenArray[i] % 2 === 0 && givenArray[i] > 0) {
        evenPositivesCount++;
        sumEvenPositives += givenArray[i];
    }
}
console.log(oddPositivesCount, evenPositivesCount);
console.log(sumOddPositives, sumEvenPositives);



// Знайти добуток позитивних елементів.

let positivesProduct = 1;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] > 0) {
        positivesProduct *= givenArray[i];
    }
}
console.log(positivesProduct);


// Знайти найбільший серед елементів масиву, решту занулити.

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] !== maxNum) {
        givenArray[i] = 0;
    }
}
console.log(givenArray);