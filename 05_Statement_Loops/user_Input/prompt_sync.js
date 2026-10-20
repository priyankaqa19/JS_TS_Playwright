const prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number"));

if(num>0){  
    console.log("The number is positive");
}else if(num<0){
    console.log("The number is negative");
}


// Still this will give eror as prompt is not defined in nodejs. 
// We need to install prompt-sync module and then use it.
// we can install it using npm install prompt-sync
// Will need to make this project as a nodejs project using npm init, currently it is purely a js project.

//command to install prompt-sync module
//npm init --> it will create a package.json file in the project folder
//npm i prompt-sync  --> it will install the prompt-sync module and add it to the package-lock.json file

// command to run the file is node prompt_sync.js

