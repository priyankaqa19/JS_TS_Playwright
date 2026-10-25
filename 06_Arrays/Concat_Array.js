

// Combining arrays using concat() method
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); // Output: [1, 2, 3, 4, 5, 6]

//spread - modern way to combine arrays
let d = [...a, ...b];
console.log(d); // Output: [1, 2, 3, 4, 5, 6]