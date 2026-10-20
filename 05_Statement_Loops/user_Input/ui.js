let num = prompt("Enter a number"); //ReferenceError: prompt is not defined
// In browser environment, prompt() is used to take input from user. In Node.js, you can use readline module or any other library to take input from user.
 
if(num>0){
    console.log("The number is positive");
}else if(num<0){
    console.log("The number is negative");
}
