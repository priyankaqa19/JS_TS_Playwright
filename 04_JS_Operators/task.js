/**
 * What is the output of the following expressions. Answer in the comments below.
1. 
let a = 100;

console.log(a++ + ++a +a++ + ++a); 100+102+104 = 106

console.log(a);

2.
let a = 37;

console.log(—a + a—);

console.log(a);

3.
let a = 5; 
let b = a-- - --a; 
console.log(b, a);

4.
let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);




Add your attendance /learning log: 
https://app.thetestingacademy.com/student/my-process



Practice all exercises done in class and push it to your github repository.
Sir’s repo : https://github.com/PramodDutta/LearnJSTSPlaywright4x

**/

let a = 100;
console.log(a++ + ++a +a++ + ++a); //100+102+102+104 = 408
console.log(a); // 104
console.log("==============================="); 

let b = 37;
console.log(--b + b--); //36 + 36 = 72
console.log(b); //35
console.log("==============================="); 


let c = 5; 
let d = c-- - --c;  //5-3 = 2
console.log(d, c); 2, 3
console.log("==============================="); 


let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i); 2, 3
console.log("==============================="); 



let attempt = 0;
while (attempt < 3) {
  attempt++;
}
console.log(attempt);

console.log(greeting);
var greeting = "Hello";
console.log(greeting);