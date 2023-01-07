function printName(person: { first: string; last: string }): void {
	console.log(`${person.first}  ${person.last}`);
	console.log(person);
}

printName({ first: 'Thomas', last: 'Jenkins' });

// It just Ignores additional arguments provided
const all = { first: 'Junaid', last: 'Khan', age: 23 };
console.log(printName(all));

let coordinate: { x: number; y: number } = {
	x: 34,
	y: 2,
};

// console.log(coordinate);

function randomCoordinate(): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() };
}
// console.log(randomCoordinate());

// Type Alliases

type Point = {
	x: number;
	y: number;
};

function Coordinates(): Point {
	return { x: Math.random(), y: Math.random() };
}
