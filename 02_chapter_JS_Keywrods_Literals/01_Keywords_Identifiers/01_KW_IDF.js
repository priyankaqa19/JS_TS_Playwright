var v = 10;
console.log('var: ' + v);

v = 20;
console.log('var updated: ' + v);

let l = 10;
console.log('let: ' + l);

l = 20;
console.log('let updated: ' + l);

const c = 10;
console.log('const: ' + c);

c = 20; // This will throw an error because const cannot be reassigned
console.log('const updated: ' + c);

// var vs let vs const
// which one we are going use?

// QA
// let - 96%
// const - 3%
// var - 1%