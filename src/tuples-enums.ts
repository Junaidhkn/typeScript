//  // Tuples
//  Fixed Length,type & Order

const color: [string, string, string] = ['red', 'green', 'blue'];
const RGBcolor: [number, number, number, { opacity: string }] = [
	23,
	243,
	12,
	{ opacity: 'lighter' },
];

// console.log(color);
// console.log(RGBcolor);

color.push('Glich / Limitations with the tuple');
// console.log(color);

type HTTPResponse = [number, string];

//  Array of Tuples
const responses: HTTPResponse[] = [
	[404, 'Not Found'],
	[200, 'OK'],
];

// console.log(responses);
// ```````````````````````````````````````~~~~~~~~~~~~~~~~~~~~~~~~~~~``````````````````````````
// // Enums
// Used to define a set of named constants, for the values that are repetitive

// enum OrderStatus {
// 	pending, // 0
// 	shipped, // 1
// 	delivered, // 2
// 	returned, // 3
// }

// const Status = OrderStatus.delivered;

// console.log(Status);
//  Const ENUM
const enum OrderedStatus {
	pending, // 0
	shipped, // 1
	delivered, // 2
	returned, // 3
}

const Status = OrderedStatus.delivered;
console.log(Status);
