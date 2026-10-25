/**
 * This code demonstrates how to add and remove elements from an array in JavaScript. It shows how to use the push, unshift, pop, shift, and splice methods to manipulate the contents of an array.
 * push() - add to END
 * pop() - remove from END
 * unshift() - add to BEGINNING
 * shift() - remove from BEGINNING
 * splice(start, count) - remove from a specific index
 */

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Adding elements to the end of the array
// Add to END - create a new element at the end of the array
arr.push(6);
console.log('After adding 6 to the end:', arr);
arr.push(7, 8, 9); // adding multiple elements at once
console.log('After adding 7, 8, 9:', arr);

// Adding elements to the beginning of the array
// Add to BEGINNING - create a new element at the beginning of the array
arr.unshift(0);
console.log('After adding 0 to the beginning:', arr);

// Removing elements from the end of the array
//Remove from END - remove the last element from the array
arr.pop(arr.length - 1);
console.log('After removing the last element:', arr);

// Removing elements from the beginning of the array
//Remove from BEGINNING - remove the first element from the array
arr.shift();
console.log('After removing the first element:', arr);

// Removing elements from a specific index
// Remove from a specific index - remove elements from a specific index
//[ 1, 2, 3, 4, 5, 6, 7, 8 ]
arr.splice(2, 1); // removes 1 element at index 2
console.log('After removing 1 element at index 2:', arr);

arr.splice(2, 0, 99); // adds 99 at index 2 without removing any elements
console.log('After adding 99 at index 2:', arr);

arr.splice(2, 1, 100); // replaces 1 element at index 2 with 100
console.log('After replacing 1 element at index 2 with 100:', arr);

arr.splice(2, 2, 101); // replaces 2 elements at index 2 with 101
console.log('After replacing 2 elements at index 2 with 101:', arr);

console.log('Final array:', arr);
//Final array: [ 1, 2, 101, 5, 6, 7, 8]

arr.splice(1, 2, 102, 103); // adds 102 and 103 at index 2 without removing any elements
console.log('After adding 102 and 103 at index 2:', arr);