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
