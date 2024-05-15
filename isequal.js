const lodash = require('lodash');

const object1 = { a: 1, b: { c: 2, d: 3 } };
const object2 = { a: 1, b: { c: 2, d: 3 } };

console.log(lodash.isEqual(object1,object2))

//using lodash library
