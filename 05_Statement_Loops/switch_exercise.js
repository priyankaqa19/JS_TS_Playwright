let x = 10;

switch(x) {
    case 1:
        console.log("x is 1");
        break;
    case 10:
        console.log("x is 10");
        break;
    case 10: // in JAVA this would give compilation error, JavaScript allows duplicate cases but only the first one will be executed
        console.log("x is 10 in second case");
        break;
    default:
        console.log("x is not 1, 10 or 100");   
}