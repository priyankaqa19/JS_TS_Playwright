let arr = [1, 2, 3, 4, 5];

let result = Array.isArray(arr);
console.log(result); // Output: true

let isArray = Array.isArray([1, 2, 3, 4, 5]);
console.log(isArray);

let notAnArray = { a: 1, b: 2 };
let result2 = Array.isArray(notAnArray);
console.log(result2); // Output: false

console.log(Array.isArray("a"));

