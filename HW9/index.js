let res = '';

for (let i = 20; i <= 30; i += 0.5) {
    res += i + ' '
}
alert(res)

// 2 
let res2 = '';

for (let i = 10; i <= 100; i += 10) {
    res2 += i * 40 + 'uah; '
}
alert(res2)

// 3
let num = prompt('Enter a number:')
let res3 = '';

for (let i = 1; i <= 100; i++) {
    if (i * i > num) {
        break;
    } else {
        res3 += i + '; ' 
    }
}
alert(res3)

// 4
let res4 = '';

for (let i = 2; i < num; i++) {
    if (num < 1 || num % i === 0) {
        res4 = 'its not a prime number';
        break;
    } else {
        res4 = 'its a prime number';
    }
}
alert(res4)

// 5
let res5 = '';

while (num > 1 && num % 3 === 0) {
    num /= 3;
}

res5 = (num === 1) ? 'can get a num by 3^n' : 'cannot get a num by 3^n';

alert(res5)