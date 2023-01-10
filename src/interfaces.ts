// // Interfaces
//  Used to create reusable, modular types that describe the shapes of objects

//  Optional and ReadOnly Interface Properties

interface Person {
	readonly id: number;
	firstName: string;
	lastName: string;
	nickName?: string;
}

// const me: Person = {
// 	id: 2323,
// 	firstName: 'Junaid',
// 	lastName: 'Khan',
// 	// nickName: 'sadfsf',
// };
// console.log(me);

// // Interface Methods

interface Person {
	readonly id: number;
	firstName: string;
	lastName: string;
	nickName?: string;
	sayHi: () => string;
	sayHiName: () => string;
}

const me: Person = {
	id: 2323,
	firstName: 'Junaid',
	lastName: 'Khan',
	sayHiName: () => {
		return `name ${me.firstName}`;
	},
	sayHi: () => {
		return 'Hello';
	},
};

console.log(me);

console.log(me.sayHi());
console.log(me.sayHiName());

interface Product {
	name: string;
	price: number;
	discount: (amount: number) => number;
}

const shoe: Product = {
	name: 'nike',
	price: 125,
	discount: (amount: number) => {
		const newPrice = shoe.price - amount;
		return newPrice;
	},
};
// console.log(shoe);

// console.log(shoe.discount(25));

// // Types Vs Interfaces

// ~~~  While Using Interfaces, we can Redeclare/Reassign the Properies and methods, but with types it's not possible

// Extending Interfaces

interface Collection extends Product {
	category: string;
}

const Item: Collection = {
	name: 'nike',
	price: 125,
	discount: (amount: number) => {
		const newPrice = shoe.price - amount;
		return newPrice;
	},
	category: 'Shoes',
};

console.log(Item);

// // Extents Multiple Interfaces
// Syntax

// interface Collection extends Product,Person{

// }
