// Transform an array using the map() method
//map() - transform an array into an new array of same size, but with different values. 
// It does not change the original array.

let scores = [45, 85, 78, 90, 88];

//map() - transform an array into an new array of same size, but with different values.
let grades = scores.map(i => (i > 50) ? 'Pass' : 'Fail');
console.log(grades);

//filter() - filter an array into a new array of smaller size, but with same values.
let passedScores = scores.filter(i => (i > 50));
console.log(passedScores);
