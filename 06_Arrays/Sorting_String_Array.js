//localeCompare() is a JavaScript string method used to compare two strings 
// according to language-specific (locale) sorting rules.

let fruits = ["banana", "apple", "cherry", "date"];
fruits.sort(); // Sorts in ascending order
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

fruits.sort((a, b) => a.localeCompare(b)); // Sorts in ascending order
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

fruits.sort((a, b) => b.localeCompare(a)); // Sorts in reverse order
console.log(fruits); // Output: ["date", "cherry", "banana", "apple"]