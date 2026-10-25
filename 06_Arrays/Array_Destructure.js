let [first, second, third] = [10, 20, 30];

console.log(first);
console.log(second);
console.log(third);

console.log('-------------');

let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(...rest);

console.log('-------------');

let [ , , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);

