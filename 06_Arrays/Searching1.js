/**
 * This code demonstrates how to search for elements in an array using JavaScript. It shows how to find the index of the first and last occurrences of a specific value, as well as how to check if a value is present in the array.
 * indexOf() - Returns the index of the first occurrence of a specified value in an array, or -1 if it is not found.
 * lastIndexOf() - Returns the index of the last occurrence of a specified value in an array, or -1 if it is not found.
 * includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 */

let results = ['pass', 'fail', 'pass', 'error', 'fail', 'pass'];

// Find the index of the first occurrence of 'fail'
let firstFailIndex = results.indexOf('fail');
console.log('Index of first occurrence of "fail":', firstFailIndex); // Output: 1

// Find the index of the last occurrence of 'fail'
let lastFailIndex = results.lastIndexOf('fail');
console.log('Index of last occurrence of "fail":', lastFailIndex); // Output: 4

// Check if 'skipped' is present in the array
let indexofSkipped = results.indexOf('skipped');
console.log('Index of first occurrence of "skipped":', indexofSkipped); // Output: -1

// Check if 'error' is present in the array
let hasError = results.includes('error');
console.log('Is "error" present in the array?', hasError); // Output: true



