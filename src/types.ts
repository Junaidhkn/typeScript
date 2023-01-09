const add = (num1: number, num2: number) => {
	return num1 + num2;
};

const a = 3;
const b = 6;

const result = add(a, b);
// console.log(result);

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

//  Check LeapYear Function that takes in the argument and spits out the boolean

const isLeapYear = (year: number): boolean => {
	if (year % 4 == 0 && year % 100 != 0) {
		return true;
	} else if (year % 400 == 0) {
		return true;
	}
	return false;
};

// console.log(isLeapYear(2012));
