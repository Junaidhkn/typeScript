const add = (num1: number, num2: number) => {
	return num1 + num2;
};

const a = 3;
const b = 6;

const result = add(a, b);
console.log(result);

// Return Type Annotations

function getFavoriteNumber(): number {
	return 26;
}

// Optional Properties

function printName(obj: { first: string; last?: string }) {
	// ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });

//  Default Parameters in Functions

const greet = (person: string = 'Junaid') => {
	return ` Hi there ${person}`;
};
