let score = 85;

if (score > 100 || score < 0) {
    console.log("Invalid score");
}
else {
    if (score >= 91) {
        console.log("You got A grade");
    }
    else if (score >= 81 && score < 91) {
        console.log("You got B grade");
    }
    else if (score >= 71 && score < 81) {
        console.log("You got C grade");
    }
    else if (score >= 61 && score < 71) {
        console.log("You got D grade");
    }
    else if (score >= 51 && score < 61) {
        console.log("You got F grade");
    }
    else {
        console.log("You got Fail");
    }
}