let tests = ['login', 'signup', 'logout', 'profile', 'settings'];

// Iterate through the array using a for loop
for (let i = 0; i < tests.length; i++) {
    console.log(`Test ${i + 1}: ${tests[i]}`);
}

console.log('--------------------------------------------');
// for..of loop (cleanest for values)
for (let test of tests) {
    console.log(`Test: ${test}`);
}

// console.log('--------------------------------------------');
// // for..in loop (cleanest for indexes)
// for (let index in tests) {
//     console.log(`Test ${parseInt(index) + 1}: ${tests[index]}`);
// } 


console.log('--------------------------------------------');
// forEach() method (no return value)
tests.forEach((test, index) => {
    console.log(`Test ${index + 1}: ${test}`);
})



