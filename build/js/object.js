"use strict";
function printName(person) {
    console.log(`${person.first}  ${person.last}`);
    console.log(person);
}
printName({ first: 'Thomas', last: 'Jenkins' });
// It just Ignores additional arguments provided
const all = { first: 'Junaid', last: 'Khan', age: 23 };
console.log(printName(all));
let coordinate = {
    x: 34,
    y: 2,
};
// console.log(coordinate);
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function Coordinates() {
    return { x: Math.random(), y: Math.random() };
}
