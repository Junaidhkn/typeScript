let age: number | string = 21;

age = 23;
age = '323';

type PointU = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Point | Loc;

coordinates = { x: 123, y: 233 };
coordinates = { lat: 2323, long: 3223 };
