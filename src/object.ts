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

type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: {
		producer: string;
		writer: string;
	};
};

function calculatePayput(song: Song): number {
	return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
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

// Optional Properties

type coordinate = {
	x: number;
	y: number;
	z?: number;
};

function myCoordinates(): coordinate {
	return { x: Math.random(), y: Math.random(), z: Math.random() };
}

const threeDimentional = myCoordinates();
console.log(threeDimentional);

//  ReadOnly modifier

type User = {
	readonly id: number;
	username: string;
};
