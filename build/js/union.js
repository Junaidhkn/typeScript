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
console.log(results);
