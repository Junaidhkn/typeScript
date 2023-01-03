"use strict";
const add = (num1, num2) => {
    return num1 + num2;
};
const a = 3;
const b = 6;
const result = add(a, b);
console.log(result);
// Return Type Annotations
function getFavoriteNumber() {
    return 26;
}
// Optional Properties
function printName(obj) {
    // ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
//  Default Parameters in Functions
const greet = (person = 'Junaid') => {
    return ` Hi there ${person}`;
};
