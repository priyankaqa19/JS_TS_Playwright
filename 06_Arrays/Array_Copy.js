let original = [1, 2, 3];
let copy1 = [...original];
console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2); // returns new array

let deep_copy_array = original;
console.log(original);
deep_copy_array.push(90);

console.log(deep_copy_array);
console.log(original); // bcz array are mutable in nature
