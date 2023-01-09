"use strict";
let age = 21;
age = 23;
age = '323';
let coordinates;
coordinates = { x: 123, y: 233 };
coordinates = { lat: 2323, long: 3223 };
// // Type Narrowing
// function calculateTax(price: number | string, tax: number) {
function calculateTax(price) {
    // if (typeof price === 'number') {
    // 	return price * tax;
    // } else {
    // 	return price.replace('$', '');
    // }
    if (typeof price === 'string') {
        price = parseInt(price.replace('$', ''));
    }
    let tax = price / 20;
    return `Total Price: ${price + tax} as price:${price} with including tax:${tax}`;
}
let results = calculateTax(500);
// console.log(results);
// // Union Types with Arrays
// Note: The following means stuff is either a number or an array of strings
// const stuff : number | string[]=[]
// Note: The following means stuff is either an array of numbers or an array of strings
// const stuff : number[] | string[]=[]
// The following states that an item in an array can be either a string or a number
const stuff = [];
//  // literal types
//  Literal Types are not just types-but the values themselves too!
let zero = 0;
// zero = 3;  It's Not Possible
//  Example
const giveAnswer = (answer) => {
    return `The Answer is ${answer}`;
};
giveAnswer('no');
giveAnswer('yes');
giveAnswer('maybe');
// giveAnswer('Not possible!')
