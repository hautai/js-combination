const Combination = require('../src/index.js');

const arr1 = ['A', 'B', 'C'];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['0', '1'];

const test = new Combination(arr1, arr2, arr3);
const result = test.combine();
console.log(result);