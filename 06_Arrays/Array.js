// ordered collection of values

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

console.log(numbers.at(-1)); // last element
console.log(numbers.at(-2)); // second last element

console.log(numbers.length);
console.log(typeof numbers);
console.log(Array.isArray(numbers));

//It wont give error if we try to access an index that is out of bounds, it will return undefined
console.log(numbers[9]); // undefined


//=================================

const fruits = ["apple", "banana", "mango", "grapes"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//=================================
//mixed data types
const mixed = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixed[0]);


//=================================
let scores = new Array(5); // creates an array of length 5 with empty slots
console.log(scores);
console.log(scores.length);

let scores2 = new Array(5, 10, 15); // creates an array with the specified elements
console.log(scores2);
console.log(scores2.length);

let scores3 = Array.of(5, 3); 
console.log(scores3);
console.log(scores3.length);

let chars = Array.from("hello"); // creates an array from a string
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
console.log(chars.length);

