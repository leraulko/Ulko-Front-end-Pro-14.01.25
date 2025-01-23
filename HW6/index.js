let numOrStr = prompt('enter number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        console.log('you declined');
        break;

    case numOrStr.trim() === '':
        console.log('empty string');
        break;

    case isNaN(+numOrStr):
        console.log('number is NaN');
        break;

    default:
        console.log('OK!');
        break;
}

// спробувала ще трішки інший варіант

switch (numOrStr) {
    case null:
        console.log('you declined');
        break;

    case '':
        console.log('empty string');
        break;

    default:
        if (isNaN(+numOrStr)) {
            console.log('number is NaN');
        } else {
            console.log('OK!');
        }
        break;
}