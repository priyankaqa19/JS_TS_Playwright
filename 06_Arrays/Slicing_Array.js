//Slice

// The slice(start, end) method returns new array
//does NOT mutate actual 
// Slice only moves forward, it does not go backward.


let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);

console.log(slicedArr); // Output: [2, 3, 4]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

let slicedArr2 = arr.slice(2);
console.log(slicedArr2); // Output: [3, 4, 5]

console.log(arr.slice(-2)); // Output: [4, 5] (last two elements)
console.log(arr.slice(0)); // Output: [1, 2, 3, 4, 5] (copy of the entire array)
console.log(arr.slice(-5)); // Output: [1, 2, 3, 4, 5] (copy of the entire array)

console.log(arr.slice(-3, -5)); // Output: [] (empty array, as the start index is greater than the end index)
