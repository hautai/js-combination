const Combination = require('../src/index.js');
const per = require('../test/cp.js');
/*
const arr1 = ['A', 'B', 'C'];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['0', '1'];
*/

const arr1 = [];
const arr2 = [];
const arr3 = [];

for (let i = 0; i < 100; i++) {
  arr1[i] = i;
  arr2[i] = i;
  arr3[i] = i;
}
/*
const date = new Date();
const test = new Combination(arr1, arr2, arr3);
const result = test.combine();
console.log(result);
console.log(new Date() - date);
*/

const date2 = new Date();
const test2 = new per(arr1, arr2, arr3);
console.log([...test2]);
console.log(new Date() - date2);
