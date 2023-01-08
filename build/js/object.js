"use strict";
// function printName(person: { first: string; last: string }): void {
// 	console.log(`${person.first}  ${person.last}`);
// 	console.log(person);
// }
// printName({ first: 'Thomas', last: 'Jenkins' });
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
function calculatePayput(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: 'Vari vari',
    artist: 'Annie Khalid',
    numStreams: 23343,
    credits: {
        producer: 'Annie',
        writer: 'Annie',
    },
};
const earnings = calculatePayput(mySong);
console.log(earnings);
printSong(mySong);
function myCoordinates() {
    return { x: Math.random(), y: Math.random(), z: Math.random() };
}
const threeDimentional = myCoordinates();
console.log(threeDimentional);
const user = {
    id: 2323,
    username: 'Junaid',
};
console.log(user);
const happyFace = {
    radius: 32,
    color: 'red',
};
console.log(happyFace);
