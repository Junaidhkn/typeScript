"use strict";
function printName(person) {
    console.log(`${person.first}  ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });
let coordinate = {
    x: 34,
    y: 2,
};
console.log(coordinate);
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
