// // Interfaces
//  Used to create reusable, modular types that describe the shapes of objects

//  Optional and ReadOnly Interface Properties

interface Person {
	readonly id: number;
	firstName: string;
	lastName: string;
	nickName?: string;
}

const me: Person = {
	id: 2323,
	firstName: 'Junaid',
	lastName: 'Khan',
	// nickName: 'sadfsf',
};
console.log(me);
