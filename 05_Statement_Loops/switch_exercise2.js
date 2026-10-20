let status  = 0;

switch(status) { // strict equality check is done in switch statement, so if status is string "0" then it will not match with case 0
    case 0:
        console.log("Status is 0"); 
        break;
    case 1:
        console.log("Status is 1");
        break;
    case 2:
        console.log("Status is 2");
        break;  

    default:
        console.log("Status is not 0, 1 or 2");
}