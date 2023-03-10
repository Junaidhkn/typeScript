"use strict";
// // Interfaces
//  Used to create reusable, modular types that describe the shapes of objects
const me = {
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
const shoe = {
    name: 'nike',
    price: 125,
    discount: (amount) => {
        const newPrice = shoe.price - amount;
        return newPrice;
    },
};
const Item = {
    name: 'nike',
    price: 125,
    discount: (amount) => {
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
