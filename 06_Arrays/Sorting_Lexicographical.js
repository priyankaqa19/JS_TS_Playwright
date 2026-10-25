let arr = [1, 10, 21, 2];
console.log(arr); 

// Natural sorting - Lexicographical sorting (default behavior) - dictionary order sorting
//compare 1st character of each element, if they are equal then compare 2nd character and so on.
arr.sort(); 
console.log(arr); 

let n = [11, -11];
console.log(n.sort());

// Numerical sorting using a compare function
arr.sort((a, b) => a - b); 
console.log(arr);

