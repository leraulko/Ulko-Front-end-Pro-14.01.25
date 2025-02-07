let res = '';

for (let i = 10; i <= 20; i++) {
    res += i + (i < 20 ? ', ' : '.');
}
alert(res);

// 2
let res2 = '';

for (let i = 10; i <= 20; i++) {
    res2 += i * i + (i < 20 ? ', ' : '.');    
}
alert(res2);

// 3
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${i * 7}`);
}

// 4
let res4 = 0;

for (let i = 1; i <= 15; i++) {
    res4 += i;
}
alert(res4)

// 5
let res5 = 1;

for (let i = 15; i <= 35; i++) {
    res5 *= i;
}
alert(BigInt(res5))

// 6
let res6 = 0;

for (let i = 1; i <= 500; i++) {
    res6 += i;
} 
alert(res6 / 500)

// 7 
let res7 = 0;

for (let i = 30; i <= 80; i += 2) {
    res7 += i;
}
alert(res7)

// 8
let res8 = '';

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        res8 += i + ', ';
    } 
}
alert(res8)

// 9
let num;
let res9 = '';

while (num == undefined || isNaN(num) || num == '') {
    num = prompt('Enter a natural number');
}

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        res9 += i + ', '
    }
}
alert(res9)

// 10
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) {
        count++ 
    }
}
alert(count)

// 11
let res11 = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) {
        res11 += i
    }
}
alert(res11)

// 12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}