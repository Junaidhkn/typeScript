// // Empty Array Type
const activeUsers: [] = [];
// //Cannot Perform array methods nor an Item can be Added ie; push()

// activeUsers.push();
// console.log(activeUsers);

// // Array types
const users: string[] = [];

users.push('Junaid', '21323', 'true');

// console.log(users);

type PointA = {
	x: number;
	y: number;
};

const coords: PointA[] = [];

coords.push({ x: 324, y: 323 }, { x: 3, y: 73 });

// console.log(coords);
