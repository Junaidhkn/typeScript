function printName(person: { first: string; last: string }): void {
	console.log(`${person.first}  ${person.last}`);
}

printName({ first: 'Thomas', last: 'Jenkins' });

let coordinate: { x: number; y: number } = {
	x: 34,
	y: 2,
};

console.log(coordinate);
