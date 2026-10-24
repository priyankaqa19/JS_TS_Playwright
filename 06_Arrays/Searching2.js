/**
 * find() method returns the value of the first element in the array that satisfies the provided testing 
 * function. Otherwise undefined is returned.
 * 
 * findIndex() method returns the index of the first element in the array that satisfies the provided testing
 * function. Otherwise -1 is returned.
 * 
 * findLast() method returns the value of the last element in the array that satisfies the provided testing
 * function. Otherwise undefined is returned.
 * 
 * findLastIndex() method returns the index of the last element in the array that satisfies the provided testing
 * function. Otherwise -1 is returned.
 * 
 * 
 */

let numbers = [10, 20, 30, 40, 50];

let result = numbers.find(temp => temp > 25);
console.log('First number greater than 25:', result); // Output: 30

let result2 = numbers.find(temp => temp < 2);
console.log('First number less than 2:', result2); // Output: undefined

let result3 = numbers.findIndex(temp => temp > 25);
console.log('Index of first number greater than 25:', result3); // Output: 2

let result4 = numbers.findIndex(temp => temp < 2);
console.log('Index of first number less than 2:', result4); // Output: -1

console.log('--------------------------------------------');
let result5 = numbers.findLast(temp => temp > 25);
console.log('Last number greater than 25:', result5); // Output: 50

let result6 = numbers.findLast(temp => temp < 2);
console.log('Last number less than 2:', result6); // Output: undefined

let result7 = numbers.findLastIndex(temp => temp > 25);
console.log('Index of last number greater than 25:', result7); // Output: 4

let result8 = numbers.findLastIndex(temp => temp < 2);
console.log('Index of last number less than 2:', result8); // Output: -1